import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from openai import OpenAI
from dotenv import load_dotenv

# =========================================================
# LOAD ENV
# =========================================================

load_dotenv()

xai_api_key = os.getenv("XAI_API_KEY")

if not xai_api_key:
    raise ValueError(
        "No se encontró XAI_API_KEY en el archivo .env"
    )

# =========================================================
# FASTAPI
# =========================================================

app = FastAPI(
    title="Essentials Store AI Assistant"
)

# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# CLIENTE XAI / GROK
# =========================================================

client = OpenAI(
    api_key=xai_api_key,
    base_url="https://api.x.ai/v1"
)

# =========================================================
# REQUEST MODEL
# =========================================================

class ChatRequest(BaseModel):
    message: str

# =========================================================
# SYSTEM PROMPT
# =========================================================

INFO_ESSENTIALS = """
Eres el asistente oficial de una marca streetwear premium llamada Essentials.

Tu objetivo es brindar una experiencia moderna, elegante y premium.

Puedes:
- recomendar outfits
- recomendar hoodies
- recomendar polos
- recomendar shorts
- sugerir combinaciones
- ayudar con tallas
- recomendar colores
- sugerir looks oversize
- responder dudas de moda urbana

Estilo de respuesta:
- moderno
- elegante
- minimalista
- breve
- premium
- amigable

Instrucciones:
- responde siempre en español
- respuestas cortas y claras
- no escribas párrafos largos
- habla como stylist premium
- nunca digas que eres IA

Colores recomendados:
- negro
- beige
- blanco
- gris
- tonos neutros

Ejemplo:
"Te recomendaría una hoodie oversize negra con shorts beige para un look clean y moderno."
"""

# =========================================================
# HOME
# =========================================================

@app.get("/")
def home():

    return {
        "estado": "ACTIVO",
        "mensaje": "Essentials AI con Grok funcionando 🔥",
        "modelo": "grok-4"
    }

# =========================================================
# CHAT
# =========================================================

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):

    try:

        # ============================================
        # VALIDAR MENSAJE
        # ============================================

        user_message = request.message.strip()

        if not user_message:

            return {
                "response": "Escríbeme algo para ayudarte con tu outfit 🔥"
            }

        # ============================================
        # MENSAJES
        # ============================================

        messages = [

            {
                "role": "system",
                "content": INFO_ESSENTIALS
            },

            {
                "role": "user",
                "content": user_message
            }

        ]

        # ============================================
        # RESPUESTA GROK
        # ============================================

        completion = client.chat.completions.create(

            model="grok-4",

            messages=messages,

            temperature=0.7,

            max_tokens=200
        )

        # ============================================
        # RESPUESTA TEXTO
        # ============================================

        response_text = completion.choices[0].message.content

        # ============================================
        # VALIDAR RESPUESTA
        # ============================================

        if not response_text:

            response_text = (
                "No pude generar una recomendación ahora mismo."
            )

        return {
            "response": response_text
        }

    except Exception as e:

        print("ERROR IA:", str(e))

        error_text = str(e)

        # ============================================
        # API KEY INVÁLIDA
        # ============================================

        if "401" in error_text:

            return {
                "response": (
                    "La API KEY de Grok es inválida o expiró."
                )
            }

        # ============================================
        # RATE LIMIT
        # ============================================

        if "429" in error_text:

            return {
                "response": (
                    "Estamos teniendo muchas consultas simultáneas. "
                    "Intenta nuevamente en unos momentos."
                )
            }

        # ============================================
        # MODELO NO DISPONIBLE
        # ============================================

        if "model" in error_text.lower():

            return {
                "response": (
                    "El modelo Grok no está disponible temporalmente."
                )
            }

        # ============================================
        # ERROR GENERAL
        # ============================================

        return {
            "response": (
                "La inteligencia artificial está temporalmente ocupada."
            )
        }

# =========================================================
# START MESSAGE
# =========================================================

print("Essentials AI con Grok cargado correctamente 🔥")