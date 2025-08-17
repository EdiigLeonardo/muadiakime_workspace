// app/cart/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-8">
        Home / <span className="font-semibold">Cart</span>
      </div>

      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {/* Products Table */}
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">LCD Monitor</TableCell>
            <TableCell>$650</TableCell>
            <TableCell>
              <Input type="number" defaultValue="01" className="w-20" min="0" />
            </TableCell>
            <TableCell className="text-right">$650</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">H1 Gamepad</TableCell>
            <TableCell>$550</TableCell>
            <TableCell>
              <Input type="number" defaultValue="02" className="w-20" min="0" />
            </TableCell>
            <TableCell className="text-right">$100</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        <Button variant="outline" className="w-full sm:w-auto">
          Return To Shop
        </Button>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Input placeholder="Coupon Code" className="flex-1" />
          <Button variant="outline" className="w-full sm:w-auto">
            Apply Coupon
          </Button>
          <Button className="w-full sm:w-auto">Update Cart</Button>
        </div>
      </div>

      {/* Cart Total */}
      <div className="bg-gray-50 p-6 rounded-lg max-w-md ml-auto w-full">
        <h2 className="text-lg font-bold mb-4">Cart Total</h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-medium">$1750</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="font-medium">Free</span>
          </div>

          <div className="flex justify-between text-lg font-bold pt-4">
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>

        <Button className="w-full">Proceed to checkout</Button>
      </div>
    </div>
  );
}
