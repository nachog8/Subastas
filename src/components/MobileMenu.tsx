import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      {/* Menu panel */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-purple-700">
              QuienDaMenos
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
              onClick={onClose}
            >
              Inicio
            </Link>
            <Link
              to="/auctions"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
              onClick={onClose}
            >
              Subastas
            </Link>
            <Link
              to="/categories"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
              onClick={onClose}
            >
              Categorías
            </Link>
            <Link
              to="/help"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
              onClick={onClose}
            >
              Ayuda
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t">
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
              onClick={onClose}
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
              onClick={onClose}
            >
              Registrarse
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
