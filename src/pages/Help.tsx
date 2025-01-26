import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
export function Help() {
  const faqs = [
    {
      question: '¿Cómo funciona una subasta inversa?',
      answer:
        'En una subasta inversa, gana quien realice la puja más baja única. Si dos usuarios hacen la misma puja, ambas se cancelan automáticamente. Es importante estrategia y timing.',
    },
    {
      question: '¿Cómo puedo participar en una subasta?',
      answer:
        'Para participar necesitas registrarte en la plataforma. Recibirás 3 créditos diarios gratis para pujar. Cada puja debe ser única y menor que las existentes.',
    },
    {
      question: '¿Qué pasa si mi puja coincide con otra?',
      answer:
        'Si tu puja coincide con la de otro usuario, ambas pujas serán canceladas automáticamente. Deberás realizar una nueva puja con un valor diferente.',
    },
    {
      question: '¿Cómo sé si voy ganando?',
      answer:
        'Podrás ver tu posición en la tabla de pujas, pero no verás los montos de otros usuarios para mantener la competencia justa.',
    },
  ];
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Centro de Ayuda</h1>
          <p className="text-gray-600">
            Encuentra respuestas a las preguntas más frecuentes sobre nuestro
            sistema de subastas
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1">
                  <HelpCircle className="w-6 h-6 text-purple-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="font-semibold mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors">
            Contactar Soporte
          </button>
        </div>
      </div>
    </div>
  );
}
