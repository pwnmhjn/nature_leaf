import { Link } from 'react-router';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

export function OrderConfirmation() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order! We've notified the delivery person and they will 
            pack your plants shortly. You will receive your order soon.
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8 text-left">
            <h2 className="font-semibold text-green-900 mb-3">What happens next?</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>The admin and delivery person have been notified via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Your plants will be carefully packed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Delivery will be made to your address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Payment will be collected on delivery (Cash on Delivery)</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button className="bg-green-600 hover:bg-green-700">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline">
                View Order Status (Admin)
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
