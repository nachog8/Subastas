import React from 'react';
import { Clock, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function ActiveAuctions() {
  const auctions = Array(9).fill(null);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Subastas Activas</h1>
        <div className="flex gap-4">
          <select className="border rounded-lg px-4 py-2">
            <option>Todas las categorías</option>
            <option>Electrónica</option>
            <option>Hogar</option>
            <option>Deportes</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>Ordenar por</option>
            <option>Menor precio</option>
            <option>Mayor precio</option>
            <option>Más recientes</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctions.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <img
              src={`https://source.unsplash.com/random/400x300?electronics&${index}`}
              alt="Product"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">Producto {index + 1}</h3>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>2h 45m restantes</span>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">Puja más baja actual:</p>
                <p className="text-2xl font-bold text-purple-700">
                  ${(Math.random() * 10 + 5).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => navigate(`/auction/${index + 1}`)}
                className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors"
              >
                Ver Subasta
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
