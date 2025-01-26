import React from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">¡Regístrate Ahora!</h2>
            <p className="text-lg">Obtén 3 créditos gratis por día</p>
            <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Registrarse
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
            alt="Featured products"
            className="w-72 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <main className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-6">Subastas Activas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow p-4 space-y-4"
            >
              <img
                src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400"
                alt="Smart TV"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-lg">Smart TV Samsung 40"</h4>
                <p className="text-gray-600">Precio actual:</p>
                <p className="text-2xl font-bold text-purple-700">$10.27</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  En curso
                </span>
                <button
                  onClick={() => navigate(`/auction/${item}`)}
                  className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                >
                  Ver Subasta
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}