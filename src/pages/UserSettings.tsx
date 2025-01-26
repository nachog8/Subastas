import React, { useState } from 'react';
import { User, Bell, Shield, Clock, CreditCard } from 'lucide-react';
export function UserSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [
    {
      id: 'profile',
      name: 'Perfil',
      icon: User,
    },
    {
      id: 'notifications',
      name: 'Notificaciones',
      icon: Bell,
    },
    {
      id: 'security',
      name: 'Seguridad',
      icon: Shield,
    },
    {
      id: 'history',
      name: 'Historial',
      icon: Clock,
    },
    {
      id: 'payment',
      name: 'Métodos de pago',
      icon: CreditCard,
    },
  ];
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Ajustes de cuenta</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab.id
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-3" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        {/* Content */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Información del perfil</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="Buenos Aires"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800">
                  Guardar cambios
                </button>
              </div>
            </div>
          )}
          {activeTab === 'history' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Historial de pujas</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Smart TV Samsung 40"</h3>
                        <p className="text-sm text-gray-500">Puja: $10.27</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Ganada
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Add other tab contents as needed */}
        </div>
      </div>
    </div>
  );
}
