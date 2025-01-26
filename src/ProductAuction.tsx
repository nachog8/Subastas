import React, { useState } from "react";
import {
  Clock,
  Heart,
  Share2,
  ChevronRight,
  User,
  Info,
  AlertCircle,
} from "lucide-react";
import { BidInput } from "./components/BidInput";

interface Bid {
  id: number;
  userId: string;
  userLocation: string;
  amount: number;
  status: "active" | "cancelled";
  timestamp: Date;
  isCurrentUser: boolean;
}

export function ProductAuction() {
  const currentUserId = "Usuario_Actual";
  const [bids, setBids] = useState<Bid[]>([
    {
      id: 1,
      userId: "martin96",
      userLocation: "Capital Federal",
      amount: 0.1,
      status: "active",
      timestamp: new Date(),
      isCurrentUser: false,
    },
    {
      id: 2,
      userId: currentUserId,
      userLocation: "Rosario",
      amount: 0.09,
      status: "active",
      timestamp: new Date(),
      isCurrentUser: true,
    },
  ]);
  const [bidAmount, setBidAmount] = useState<string>("");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [integerPart, setIntegerPart] = useState("");
  const [decimalPart, setDecimalPart] = useState("");

  const getCurrentUserPosition = (amount: number) => {
    const activeBids = bids.filter((bid) => bid.status === "active");
    const sortedBids = activeBids.sort((a, b) => a.amount - b.amount);
    const position = sortedBids.findIndex((bid) => bid.amount === amount) + 1;
    const total = sortedBids.length;
    return {
      position,
      total,
    };
  };

  const handleBid = () => {
    const amount = parseFloat(bidAmount);
    if (isNaN(amount) || amount <= 0) {
      setFeedback({
        type: "error",
        message: "Por favor, ingresa una cantidad válida",
      });
      return;
    }

    const existingBid = bids.find(
      (bid) => bid.amount === amount && bid.status === "active",
    );

    if (existingBid) {
      const newBids = bids.map((bid) =>
        bid.amount === amount
          ? {
              ...bid,
              status: "cancelled",
            }
          : bid,
      );
      setBids(newBids);
      setFeedback({
        type: "error",
        message:
          "Esta cantidad ya fue pujada. Ambas pujas han sido canceladas.",
      });
      return;
    }

    const newBid = {
      id: bids.length + 1,
      userId: currentUserId,
      userLocation: "Rosario",
      amount: amount,
      status: "active",
      timestamp: new Date(),
      isCurrentUser: true,
    };

    const newBids = [...bids, newBid];
    setBids(newBids);
    const { position, total } = getCurrentUserPosition(amount);
    setFeedback({
      type: "success",
      message: `¡Puja realizada! Tu posición actual: ${position}º de ${total} pujas activas.`,
    });
    setBidAmount("");
  };

  const handleBidSubmit = () => {
    const amount = parseFloat(`${integerPart || "0"}.${decimalPart || "00"}`);
    setBidAmount(amount.toString());
    handleBid();
  };

  const getOrderedPositions = () => {
    const activeBids = bids.filter((bid) => bid.status === "active");
    const sortedBids = activeBids.sort((a, b) => a.amount - b.amount);
    const positions = new Array(15).fill(null).map((_, index) => {
      if (index < sortedBids.length) {
        return sortedBids[index];
      }
      return null;
    });
    return positions;
  };

  const renderBidTable = () => (
    <div className="mt-6">
      <h3 className="font-semibold mb-3">Tabla de Posiciones</h3>
      <div className="bg-white rounded-lg border">
        {getOrderedPositions().map((bid, index) => (
          <div
            key={index}
            className={`flex items-center p-3 ${index !== 14 ? "border-b" : ""} ${bid?.isCurrentUser ? "bg-purple-50" : index % 2 === 0 ? "bg-gray-50" : ""}`}
          >
            <span className="w-8 font-semibold text-gray-600">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="flex-1 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-gray-500" />
              </div>
              {bid ? (
                <div>
                  <span className="font-medium">{bid.userId}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({bid.userLocation})
                  </span>
                </div>
              ) : (
                <span className="text-gray-400">Posición disponible</span>
              )}
            </div>
            <div className="w-24 text-right">
              {bid?.isCurrentUser && (
                <span className="font-semibold text-purple-700">
                  ${bid.amount.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
        <div className="w-3 h-3 bg-purple-50 border border-purple-100 rounded"></div>
        <span>Tus pujas activas</span>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-800">
                ¿Cómo funciona esta subasta?
              </h3>
              <p className="text-blue-600 text-sm mt-1">
                Realiza pujas con valores únicos. No podrás ver las pujas de
                otros usuarios, pero sabrás tu posición actual. Si tu puja
                coincide con otra existente, ambas serán canceladas. ¡La puja
                más baja única gana!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=800"
                alt="Smart TV Samsung"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=200"
                    alt={`View ${i}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">
                Descripción del Producto
              </h2>
              <p className="text-gray-600">
                Smart TV Samsung 40" LED Full HD con tecnología Crystal Display.
                Resolución 1920 x 1080, conectividad WiFi, 2 puertos HDMI, 1
                puerto USB. Producto nuevo en caja sellada con garantía oficial
                de Samsung.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Características:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Pantalla LED 40"</li>
                    <li>Resolución Full HD</li>
                    <li>Smart TV</li>
                    <li>WiFi integrado</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Especificaciones:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Modelo 2023</li>
                    <li>2 HDMI, 1 USB</li>
                    <li>Crystal Display</li>
                    <li>Control remoto incluido</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Smart TV Samsung 40"</h1>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 text-purple-700">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Tiempo restante: 2h 45m</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-2">
                  <BidInput
                    integerPart={integerPart}
                    decimalPart={decimalPart}
                    onIntegerChange={setIntegerPart}
                    onDecimalChange={setDecimalPart}
                    onSubmit={handleBidSubmit}
                  />
                  {feedback.type && (
                    <div
                      className={`mt-3 p-3 rounded-lg flex items-start gap-2 ${feedback.type === "error" ? "bg-red-50 text-red-700" : feedback.type === "success" ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}
                    >
                      {feedback.type === "error" && (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <p className="text-sm">{feedback.message}</p>
                    </div>
                  )}
                </div>
              </div>
              {renderBidTable()}
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">Vendedor</p>
                    <p className="font-semibold">TechStore</p>
                  </div>
                  <button className="text-purple-700 flex items-center gap-1 hover:underline">
                    Ver perfil
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}