import React from "react";
import { ChevronUp, ChevronDown, Zap, Eye, Shield, Target } from "lucide-react";

interface BidInputProps {
  integerPart: string;
  decimalPart: string;
  onIntegerChange: (value: string) => void;
  onDecimalChange: (value: string) => void;
  onSubmit: () => void;
}

export function BidInput({
  integerPart,
  decimalPart,
  onIntegerChange,
  onDecimalChange,
  onSubmit,
}: BidInputProps) {
  const handleIntegerIncrement = () => {
    const current = parseInt(integerPart) || 0;
    onIntegerChange((current + 1).toString());
  };

  const handleIntegerDecrement = () => {
    const current = parseInt(integerPart) || 0;
    if (current > 0) {
      onIntegerChange((current - 1).toString());
    }
  };

  const handleDecimalIncrement = () => {
    const current = parseInt(decimalPart) || 0;
    if (current < 99) {
      onDecimalChange(
        current < 9 ? `0${current + 1}` : (current + 1).toString(),
      );
    }
  };

  const handleDecimalDecrement = () => {
    const current = parseInt(decimalPart) || 0;
    if (current > 0) {
      onDecimalChange(
        current <= 10 ? `0${current - 1}` : (current - 1).toString(),
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        {/* Entrada de puja */}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2">
            {/* Parte entera */}
            <div className="relative flex-1">
              <div className="absolute right-0 inset-y-0 flex flex-col border-l">
                <button
                  onClick={handleIntegerIncrement}
                  className="flex-1 px-2 hover:bg-gray-100"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  onClick={handleIntegerDecrement}
                  className="flex-1 px-2 hover:bg-gray-100 border-t"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <input
                type="text"
                value={integerPart}
                onChange={(e) =>
                  onIntegerChange(e.target.value.replace(/\D/g, ""))
                }
                className="w-full pr-8 py-2 border rounded-lg text-center text-lg"
                placeholder="0"
              />
            </div>
            <span className="text-2xl font-bold">,</span>
            {/* Parte decimal */}
            <div className="relative w-24">
              <div className="absolute right-0 inset-y-0 flex flex-col border-l">
                <button
                  onClick={handleDecimalIncrement}
                  className="flex-1 px-2 hover:bg-gray-100"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  onClick={handleDecimalDecrement}
                  className="flex-1 px-2 hover:bg-gray-100 border-t"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <input
                type="text"
                value={decimalPart}
                onChange={(e) =>
                  onDecimalChange(
                    e.target.value.replace(/\D/g, "").padStart(2, "0"),
                  )
                }
                className="w-full pr-8 py-2 border rounded-lg text-center text-lg"
                maxLength={2}
                placeholder="00"
              />
            </div>
          </div>
          <button
            onClick={onSubmit}
            className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Pujar
          </button>
        </div>
        {/* Acciones bonus */}
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
            <Zap className="h-5 w-5 text-yellow-500" />
            <div className="text-left">
              <p className="font-medium">Puja Rápida</p>
              <p className="text-xs text-gray-500">2 créditos</p>
            </div>
          </button>
          <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
            <Eye className="h-5 w-5 text-blue-500" />
            <div className="text-left">
              <p className="font-medium">Ver Pujas</p>
              <p className="text-xs text-gray-500">3 créditos</p>
            </div>
          </button>
          <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
            <Shield className="h-5 w-5 text-green-500" />
            <div className="text-left">
              <p className="font-medium">Protección</p>
              <p className="text-xs text-gray-500">4 créditos</p>
            </div>
          </button>
          <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
            <Target className="h-5 w-5 text-red-500" />
            <div className="text-left">
              <p className="font-medium">Puja Única</p>
              <p className="text-xs text-gray-500">5 créditos</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}