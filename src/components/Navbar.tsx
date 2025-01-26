import React, { useState } from 'react';
import { Menu, Search, Bell, User, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </button>
                <Link to="/" className="text-xl font-bold text-purple-700">
                  QuienDaMenos
                </Link>
              </div>
              <div className="hidden lg:flex items-center gap-6">
                <Link to="/" className="text-gray-700 hover:text-purple-700">
                  Inicio
                </Link>
                <Link
                  to="/auctions"
                  className="text-gray-700 hover:text-purple-700"
                >
                  Subastas
                </Link>
                <Link
                  to="/categories"
                  className="text-gray-700 hover:text-purple-700"
                >
                  Categorías
                </Link>
                <Link
                  to="/help"
                  className="text-gray-700 hover:text-purple-700"
                >
                  Ayuda
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar subastas..."
                  className="bg-transparent border-none outline-none w-48"
                />
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="h-5 w-5 text-gray-700" />
                </button>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-700"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="hidden md:inline">Mi Cuenta</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
