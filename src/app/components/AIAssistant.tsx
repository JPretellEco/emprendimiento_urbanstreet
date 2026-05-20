import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Hola, soy el asistente oficial de URBAN STREET. ¿Qué estás buscando hoy?',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;

    const currentMessage = inputValue.trim();

    // Agregar mensaje usuario
    const userMessage: Message = {
      role: 'user',
      content: currentMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Limpiar input
    setInputValue('');

    // Activar loading
    setLoading(true);

    try {
      // Request al backend FastAPI
      const response = await axios.post(
        'http://127.0.0.1:8000/chat',
        {
          message: currentMessage,
        }
      );

      // Mensaje IA
      const assistantMessage: Message = {
        role: 'assistant',
        content:
          response.data.response ||
          'No recibí respuesta del modelo.',
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);

    } catch (error: any) {

      console.error('ERROR IA:', error);

      let errorMessage =
        'Hubo un problema conectando con la inteligencia artificial.';

      // Error backend
      if (error.response) {
        errorMessage = `Error ${error.response.status}: ${
          error.response.data?.detail || 'Backend'
        }`;
      }

      // Error conexión
      else if (error.request) {
        errorMessage =
          'No se pudo conectar con el servidor IA.';
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: errorMessage,
        },
      ]);
    }

    // Desactivar loading
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-black text-white shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Abrir asistente IA"
      >
        {isOpen ? (
          <X className="w-5 h-5" strokeWidth={1.5} />
        ) : (
          <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        )}
      </button>

      {/* Chat */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-40 w-[360px] h-[520px] bg-white border border-gray-200 shadow-2xl flex flex-col rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-200 bg-black text-white">
            <h3 className="text-sm tracking-[0.2em] uppercase font-medium">
              URBAN STREET AI
            </h3>

            <p className="text-[11px] text-gray-300 mt-1">
              Asistente inteligente de moda
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fafafa]">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white border border-gray-200 text-black'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-black px-4 py-3 rounded-2xl text-sm">
                  Escribiendo...
                </div>
              </div>
            )}

          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">

            <div className="flex items-center gap-2">

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && handleSendMessage()
                }
                placeholder="Pregúntame sobre outfits..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                onClick={handleSendMessage}
                disabled={loading}
                className="w-12 h-12 rounded-xl bg-black text-white hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" strokeWidth={1.8} />
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};