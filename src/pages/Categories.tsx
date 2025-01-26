import React from "react";
import {
  Smartphone,
  Tv,
  Laptop,
  Headphones,
  Camera,
  Watch,
  Gift,
  Package,
} from "lucide-react";

export function Categories() {
  const categories = [
    {
      name: "Electrónica",
      icon: Smartphone,
      count: 156,
    },
    {
      name: "TVs y Monitores",
      icon: Tv,
      count: 89,
    },
    {
      name: "Computadoras",
      icon: Laptop,
      count: 124,
    },
    {
      name: "Audio",
      icon: Headphones,
      count: 67,
    },
    {
      name: "Fotografía",
      icon: Camera,
      count: 45,
    },
    {
      name: "Relojes",
      icon: Watch,
      count: 34,
    },
    {
      name: "Regalos",
      icon: Gift,
      count: 78,
    },
    {
      name: "Otros",
      icon: Package,
      count: 92,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Categorías</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <category.icon className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-sm text-gray-600">
                  {category.count} subastas activas
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}