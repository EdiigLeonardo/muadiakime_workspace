import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function HomeSections() {
  // Dados das categorias
  const categories = [
    "Womans Fashion",
    "Mens Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  // Dados dos produtos em promoção
  const flashSales = [
    {
      name: "HAVIT HV-692 Gamepad",
      originalPrice: "$160",
      salePrice: "$120",
      rating: 5,
      reviews: 88,
      image: "/placeholder-gamepad.jpg",
    },
    {
      name: "AK-900 Wired Keyboard",
      originalPrice: "$160",
      salePrice: "$96",
      rating: 5,
      reviews: 79,
      image: "/placeholder-keyboard.jpg",
    },
    {
      name: "IPS LCD Gaming Monitor",
      originalPrice: "$400",
      salePrice: "$370",
      rating: 5,
      reviews: 89,
      image: "/placeholder-monitor.jpg",
    },
    {
      name: "S-Series Comfort Chair",
      originalPrice: "$400",
      salePrice: "$375",
      rating: 5,
      reviews: 89,
      image: "/placeholder-chair.jpg",
    },
  ];

  // Produtos mais vendidos
  const bestSellers = [
    {
      name: "The north coat",
      originalPrice: "$360",
      salePrice: "$260",
      rating: 4,
      reviews: 65,
      image: "/placeholder-coat.jpg",
    },
    {
      name: "Gucci duffle bag",
      originalPrice: "$160",
      salePrice: "$90",
      rating: 4,
      reviews: 55,
      image: "/placeholder-bag.jpg",
    },
    {
      name: "RGB liquid CPU Cooler",
      originalPrice: "$170",
      salePrice: "$100",
      rating: 4,
      reviews: 55,
      image: "/placeholder-cooler.jpg",
    },
    {
      name: "Small BookSelf",
      price: "$300",
      rating: 4,
      reviews: 55,
      image: "/placeholder-bookshelf.jpg",
    },
  ];

  // Produtos em destaque
  const featuredProducts = [
    {
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 5,
      reviews: 35,
      image: "/placeholder-dogfood.jpg",
    },
    {
      name: "CAMON EOS DSLR Camera",
      price: "$360",
      rating: 5,
      reviews: 65,
      image: "/placeholder-camera.jpg",
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      reviews: 325,
      image: "/placeholder-laptop.jpg",
    },
    {
      name: "Curology Product Set",
      price: "$500",
      rating: 5,
      reviews: 145,
      image: "/placeholder-skincare.jpg",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Seção de Categorias */}
      <section className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {categories.map((category, index) => (
            <Button key={index} variant="ghost" className="hover:bg-gray-100">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="bg-blue-50 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">iPhone 14 Series</h2>
            <p className="text-lg mb-4">Up to 10% off Voucher</p>
            <Button>Shop Now →</Button>
          </div>
          <div className="bg-gray-200 w-full md:w-1/3 h-64 flex items-center justify-center">
            <span className="text-gray-500">[iPhone Image]</span>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Today&apos;s Flash Sales</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Ends in:</span>
            <div className="font-mono font-bold">03 : 23 : 19 : 56</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {flashSales.map((product, index) => (
            <ProductCard
              key={index}
              product={{ ...product, product: true, showDiscount: true }}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">View All Products</Button>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Browse By Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Phones",
            "Computers",
            "SmartWatch",
            "Camera",
            "HeadPhones",
            "Gaming",
          ].map((category, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-100 h-20 mb-2 flex items-center justify-center">
                <span className="text-gray-500">{category}</span>
              </div>
              <h3 className="font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <ProductCard
              key={index}
              product={{ ...product, product: true, showDiscount: false }}
            />
          ))}
        </div>
      </section>

      {/* Music Experience Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">
            Enhance Your Music Experience
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {["How: 23", "Do: 05", "Why: 59", "What: 35", "People: 1"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div className="text-center">
            <Button>Buy Now!</Button>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explore Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={{ ...product, product: true, showDiscount: false }}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">View All Products</Button>
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-2">Featured</h2>
            <h3 className="text-2xl font-bold mb-4">New Arrival</h3>
            <h4 className="text-xl font-medium mb-4">
              Women&apos;s Collections
            </h4>
            <p className="mb-6">
              Featured women collections that give you another vibe.
            </p>
            <Button>Shop Now</Button>
          </div>
          <div className="md:w-1/2 bg-gray-200 h-64 flex items-center justify-center">
            <span className="text-gray-500">
              [Women&apos;s Collection Image]
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente de Card de Produto Reutilizável
type Product = {
  name: string;
  originalPrice?: string;
  salePrice?: string;
  price?: string;
  rating: number;
  reviews: number;
  image: string;
  product: boolean;
  showDiscount: boolean;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        <span className="text-gray-500">[Image: {product.name}]</span>
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-1">{product.name}</h3>

        {product.salePrice ? (
          <div className="flex gap-2 mb-2">
            <span className="font-bold">{product.salePrice}</span>
            <span className="text-gray-500 line-through">
              {product.originalPrice}
            </span>
          </div>
        ) : (
          <p className="font-bold mb-2">{product.price}</p>
        )}

        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        <Button className="w-full">Add To Cart</Button>
      </div>
    </div>
  );
}
