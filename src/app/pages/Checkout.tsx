import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartTotal, createOrder, clearCart } = useAppContext();
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    deliveryAddress: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName || !formData.customerEmail || !formData.customerPhone || !formData.deliveryAddress) {
      toast.error('Please fill in all fields');
      return;
    }

    if (cart.length === 0) {
      toast.error('Your cart is empty');
      navigate('/');
      return;
    }

    // Create order
    const newOrder = {
      ...formData,
      items: cart,
      totalAmount: getCartTotal(),
      status: 'pending' as const
    };

    createOrder(newOrder);
    clearCart();
    
    toast.success('Order placed successfully!');
    navigate(`/order-confirmation/${newOrder.customerEmail}`);
  };

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Full Name</Label>
                  <Input
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="customerEmail">Email</Label>
                  <Input
                    id="customerEmail"
                    name="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="customerPhone">Phone Number</Label>
                  <Input
                    id="customerPhone"
                    name="customerPhone"
                    type="tel"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="deliveryAddress">Delivery Address</Label>
                  <Textarea
                    id="deliveryAddress"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    placeholder="123 Main St, Apt 4B, City, State 12345"
                    rows={3}
                    required
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Payment</h3>
                  <p className="text-sm text-gray-600">
                    Cash on delivery. Payment will be collected when your plants are delivered.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Place Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div key={item.plant.id} className="flex justify-between text-sm">
                  <span>
                    {item.plant.name} x {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.plant.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg text-green-900">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
