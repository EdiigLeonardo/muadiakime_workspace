// components/CartModal.tsx
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CartModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white fixed z-50 rounded-lg shadow-lg w-full max-w-md right-2.5">
      {/* Modal Header */}
      <div className="flex justify-between items-center border-b p-4">
        <h3 className="font-bold text-lg">Seu Carrinho</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="divide-y">
        {/* Item 1 */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Afnan Historic Olmeda</h4>
              <p className="text-sm text-gray-600">
                Eau de Parfum unissexo 100 ml
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm">1 un.</p>
              <p className="font-medium">46,80 €</p>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">
                Afnan Supremacy Collector&#39;s Edition
              </h4>
              <p className="text-sm text-gray-600">
                Eau de Parfum para homens 10...
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm">1 un.</p>
              <p className="font-medium">50,20 €</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="border-t p-4">
        <Button
          variant="outline"
          className="w-full border-gray-300 hover:bg-gray-50"
          onClick={() => {
            window.location.href = "/cart";
            onClose();
          }}
        >
          Voltar ao carrinho
        </Button>
      </div>
    </div>
  );
}
