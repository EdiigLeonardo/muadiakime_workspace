import { Button } from "@/components/ui/button";

export function Wishlist() {
  const wishlistItems = [
    {
      name: "RGB liquid CPU Cooler",
      price: "$1800",
      image: "/placeholder-cooler.jpg",
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: "$550",
      image: "/placeholder-gamepad.jpg",
    },
    {
      name: "Quilted Satin Jacket",
      price: "$750",
      image: "/placeholder-jacket.jpg",
    },
    {
      name: "Just For You",
      price: "",
      image: "/placeholder-special.jpg",
    },
    {
      name: "IP8 LCD Gaming Monitor",
      price: "$1160",
      image: "/placeholder-monitor.jpg",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: "$560",
      image: "/placeholder-gamepad2.jpg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "$200",
      image: "/placeholder-keyboard.jpg",
    },
    {
      name: "See All",
      price: "",
      image: "",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-8">Wishlist (4)</h1>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image Placeholder */}
            {item.image ? (
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <span className="text-gray-500">[Image: {item.name}]</span>
              </div>
            ) : (
              <div className="bg-gray-50 h-48 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium mb-1">{item.name}</h3>
              {item.price && (
                <p className="font-bold text-lg mb-3">{item.price}</p>
              )}

              <Button
                variant="outline"
                className="w-full bg-gray-900 text-secondary"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
