// app/product/[id]/page.tsx
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        Account / Gaming / Mark HVG-92 Gamepad
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images - placeholder for image gallery */}
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <span className="text-gray-400">Product Image Gallery</span>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Haptic HV G-92 Gamepad</h1>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">(50 reviews)</span>
            <span className="text-sm text-gray-500 ml-4">💤 ⭐ ⭐</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold mb-6">$192.00</p>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Progettable & Complete Skip High quality Pty-shift of personal
            wellbeing for every Subsite has passed & made free removed Pressure
            sensitive.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Colorize:</h3>
            <div className="flex gap-2">
              <Checkbox />
              <Checkbox checked />
              <Checkbox checked />
              <Checkbox checked />
            </div>
          </div>

          {/* Size/Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size:</h3>
            <div className="flex items-center gap-4">
              <Input className="w-20" placeholder="2" />
              <span>day Hour</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Free Delivery</h3>
            <Input placeholder="Enter your pencil code for Delivery Availability" />
          </div>

          {/* Return Policy */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Return Delivery</h3>
            <p className="text-sm text-gray-600">
              Free 92 Every Delivery Returns: 0,0003
            </p>
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full py-6 text-lg">Add to Cart</Button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-6">Related Items:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 h-48 mb-4 rounded"></div>
            <h3 className="font-medium">HAVIT HVG-922 Gamepad</h3>
            <div className="flex items-center my-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(45)</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">$100</span>
              <span className="text-gray-500 line-through">$40</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 h-48 mb-4 rounded"></div>
            <h3 className="font-medium">AC-500 Wired Keyboard</h3>
            <div className="flex items-center my-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(75)</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">$989</span>
              <span className="text-gray-500 line-through">$150</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 h-48 mb-4 rounded"></div>
            <h3 className="font-medium">PS LCD Gaming Monitor</h3>
            <div className="flex items-center my-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(10)</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">$719</span>
              <span className="text-gray-500 line-through">$450</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 h-48 mb-4 rounded"></div>
            <h3 className="font-medium">BGB Equal CPU Cooler</h3>
            <div className="flex items-center my-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(45)</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">$105</span>
              <span className="text-gray-500 line-through">$79</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
