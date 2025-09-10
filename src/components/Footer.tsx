import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";

export default function Footer() {
  // eslint-disable-next-line no-console
  console.log("foo");
  return (
    <footer className="bg-gray-900 text-white px-8 py-12 flex">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div>
          <h3 className="font-bold mb-2">Muadiakimi</h3>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="flex mt-2 gap-2">
            <Input placeholder="Enter your email" className="rounded-l-md" />
            <Button className="rounded-r-md bg-white text-primary hover:bg-gray-200">
              <ArrowBigRight />
            </Button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <p className="text-sm">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm">Muadiakimi@gmail.com</p>
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
              className=" bg-gray-100 relative"
              style={{ width: "calc(100% / 2)", aspectRatio: "1/1" }}
            >
              <Image src="/qr-code.jpg" fill alt="qr-code-image" />
              {/* TODO: Should Implement QRCODe */}
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
