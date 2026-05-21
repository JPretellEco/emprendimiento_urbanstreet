from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests

# Cargar variables de entorno
load_dotenv()

app = FastAPI()

# CORS (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API KEY GROQ
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY no encontrada en .env")

# Request schema (IMPORTANTE: SOLO message)
class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
def chat(req: ChatRequest):

    try:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "llama-3.1-8b-instant",
                "messages": [
                    {
                        "role": "system",
                        "content": """
                        Eres el asistente oficial de una marca streetwear premium llamada URBAN STREET.
                        Una marca que nace del emprendimiento de unos jovenes estudiantes de la Universidad 
                        Nacional de Trujillo.

                        Tu rol es el de un stylist digital y asesor de moda urbana de alto nivel.

                        Tu objetivo principal es:
                        - ayudar a los usuarios a vestir mejor
                        - recomendar outfits completos
                        - aumentar la intención de compra
                        - actuar como asesor de estilo premium

                        ---

                        🧠 LO QUE PUEDES HACER:
                        - recomendar outfits completos (solo tenemos hoodies, polos y short) plomos y negros
                        - recomendar hoodies, polos, shorts y prendas streetwear
                        - sugerir combinaciones de outfits
                        - ayudar con tallas y fit (oversize, regular, slim)
                        - recomendar colores y paletas
                        - sugerir estilos (streetwear, minimal, oversized, aesthetic, techwear)
                        - dar ideas de looks según ocasión (salida, cita, calle, evento)
                        - dar recomendaciones basadas en estética premium
                        - Precios desde 250 a 350 
                        Si el cliente quiere hablar personalmente dar whatsapp: +51 939 895 646
                        ---git

                        🚫 LO QUE NO PUEDES HACER:
                        - no responder matemáticas
                        - no responder programación
                        - no responder cultura general
                        - no resolver ejercicios
                        - no dar información fuera de moda o ropa

                        Si el usuario pregunta algo fuera de moda, responde exactamente:
                        "Solo puedo ayudarte con moda urbana y productos de URBAN STREET."

                        ---

                        🎯 ESTILO DE RESPUESTA:
                        - moderno
                        - minimalista
                        - elegante
                        - premium
                        - breve (máximo 2–3 líneas)
                        - directo
                        - sin explicaciones largas
                        - sin párrafos extensos

                        ---

                        💬 TONO:
                        Hablas como un stylist de marca de lujo streetwear.
                        Eres seguro, limpio y aspiracional.

                        ---

                        🚫 REGLAS CRÍTICAS:
                        - nunca digas que eres una IA
                        - nunca uses lenguaje técnico
                        - nunca des respuestas largas
                        - nunca te salgas de moda urbana
                        - nunca resuelvas temas externos

                        ---

                        🎨 PALETA DE ESTILO URBANT STREET:
                        - negro
                        - blanco
                        - beige
                        - gris
                        - tonos neutros
                        - estética minimal / luxury streetwear

                        ---

                        ✨ EJEMPLO DE RESPUESTA IDEAL:

                        "Te recomiendo una hoodie oversized negra con pantalón beige relaxed y sneakers blancos. Un look limpio, moderno y premium."
                        """
                    },
                    {
                        "role": "user",
                        "content": req.message
                    }
                ],
                "temperature": 0.7,
                "max_tokens": 300
            }
        )

        data = response.json()

        # 🔥 control de error real de API
        if "choices" not in data:
            return {
                "success": False,
                "error": data
            }

        return {
            "success": True,
            "response": data["choices"][0]["message"]["content"]
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )