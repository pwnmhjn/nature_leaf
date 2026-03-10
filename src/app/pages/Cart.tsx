import { Link } from 'react-router';
import { useAppContext } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useAppContext();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-12 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Start adding some plants to your collection!
          </p>
          <Link to="/">
            <Button className="bg-green-600 hover:bg-green-700">
              Browse Plants
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.plant.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Plant Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <ImageWithFallback
                      src={item.plant.image}
                      alt={item.plant.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* Plant Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-green-900">
                      {item.plant.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {item.plant.scientificName}
                    </p>
                    <p className="text-lg font-semibold text-green-600 mt-2">
                      ${item.plant.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.plant.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.plant.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.plant.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="font-semibold text-green-900">
                      ${(item.plant.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-green-900 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-lg text-green-900">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full bg-green-600 hover:bg-green-700 mb-3">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
