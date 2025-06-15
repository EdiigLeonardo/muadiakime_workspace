import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div>
          <h3 className="font-bold mb-2">Exclusive</h3>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="flex mt-2">
            <Input placeholder="Enter your email" className="rounded-l-md" />
            <Button className="rounded-r-md bg-white text-black hover:bg-gray-200">
              →
            </Button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <p className="text-sm">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Account</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Link</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="max-w-50 flex gap-2">
            <div
              className=" bg-gray-100"
              style={{ width: "calc(100% / 2)", aspectRatio: "1/1" }}
            >
              {/* TODO: Should Implement QRCODe */}
            </div>
            <div className="w-1/2 min-h-full flex flex-col justify-center items-center gap-2.5">
              {" "}
              <div className="w-full h-1/3 p-5 border-2 border-amber-50 rounded-lg relative">
                <Image
                  src="/google-pay.png"
                  alt="Google Pay"
                  fill
                  className="w-full"
                />
              </div>
              <div className="w-full h-1/3 p-5 border-2 border-amber-50 rounded-lg relative">
                <Image
                  src="/apple-pay.png"
                  alt="App Store"
                  fill
                  className="w-full"
                />
              </div>
              {/* <img src="" alt="Google Play" className="w-32" />
            <img src="/app-store.png" alt="App Store" className="w-32" /> */}
            </div>
          </div>
          <h4 className="font-bold mb-2">Download App</h4>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
        </div>
      </div>
      <div className="text-center text-xs mt-8 text-muted-foreground">
        © Copyright Drupfeller 2025. All rights reserved.
      </div>
    </footer>
  );
}
