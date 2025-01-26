import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { CreditCard, Package } from 'lucide-react';

const creditPackages = [
  { credits: 10, price: 5, popular: false },
  { credits: 25, price: 10, popular: true },
  { credits: 50, price: 18, popular: false },
  { credits: 100, price: 30, popular: false },
];

export function BuyCredits() {
  const { profile } = useAuth();

  const handleBuyCredits = (credits: number, price: number) => {
    // TODO: Implement MercadoPago integration
    console.log(`Buying ${credits} credits for $${price}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Comprar Créditos</h1>
          <p className="text-gray-600">
            Tienes actualmente <span className="font-semibold text-purple-700">{profile?.credits} créditos</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creditPackages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border p-6 flex flex-col ${
                pkg.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {pkg.popular && (
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit mb-4">
                  Más popular
                </span>
              )}
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Package className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold">{pkg.credits} créditos</h3>
              <p className="text-gray-500 mb-4">USD ${pkg.price}</p>
              <button
                onClick={() => handleBuyCredits(pkg.credits, pkg.price)}
                className={`mt-auto w-full py-2 px-4 rounded-lg font-medium ${
                  pkg.popular
                    ? 'bg-purple-700 text-white hover:bg-purple-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Comprar ahora
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Método de pago</h2>
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <CreditCard className="h-6 w-6 text-gray-500" />
            <div>
              <p className="font-medium">Mercado Pago</p>
              <p className="text-sm text-gray-500">
                Pago seguro procesado por Mercado Pago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}