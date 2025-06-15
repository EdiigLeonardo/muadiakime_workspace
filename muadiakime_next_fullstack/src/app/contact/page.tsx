// app/contact/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <span className="text-black">Exclusive</span> / Home / Contact
      </div>

      <h1 className="text-3xl font-bold mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Call To Us</h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-2">
                  We are available July 7, 1999 a week.
                </p>
                <p className="font-medium">Phone: +18000111222</p>
              </div>

              <div className="h-px bg-gray-200 w-full"></div>

              <div>
                <h3 className="text-lg font-medium mb-4">Write To US</h3>
                <p className="text-gray-600 mb-2">
                  If true, our form part we will contact you within at home.
                </p>
                <p className="font-medium">Email: customers@exclusive.com</p>
                <p className="font-medium">Email: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Phone" />
            </div>

            <Textarea placeholder="Your Message" className="min-h-[150px]" />

            <div className="flex justify-end">
              <Button className="px-8 py-6">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
