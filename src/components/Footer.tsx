import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="font-bold text-lg mb-4">QuienDaMenos</h3>
            <p className="text-gray-600 text-sm">
              La plataforma líder de subastas inversas donde encontrarás las
              mejores ofertas.
            </p>
          </div>
          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Subastas Activas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Registrarse
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Centro de Ayuda
                </a>
              </li>
            </ul>
          </div>
          {/* Información Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
          {/* Contacto y Redes Sociales */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 QuienDaMenos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}