import { useAppContext } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Package, 
  ShoppingBag, 
  CheckCircle, 
  MessageSquare,
  Clock,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { toast } from 'sonner';

export function Admin() {
  const { orders, updateOrderStatus, notifyDeliveryPerson } = useAppContext();

  const handleNotifyDelivery = (orderId: string) => {
    notifyDeliveryPerson(orderId);
    toast.success('WhatsApp notification sent to delivery person!', {
      description: 'The delivery person has been notified to pack and deliver the order.'
    });
  };

  const handleUpdateStatus = (orderId: string, status: 'pending' | 'packed' | 'delivered') => {
    updateOrderStatus(orderId, status);
    const statusMessages = {
      pending: 'Order status updated to Pending',
      packed: 'Order marked as Packed',
      delivered: 'Order marked as Delivered'
    };
    toast.success(statusMessages[status]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'packed':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'packed':
        return <Package className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <ShoppingBag className="w-4 h-4" />;
    }
  };

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    packed: orders.filter(o => o.status === 'packed').length,
    delivered: orders.filter(o => o.status === 'delivered').length
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage orders and coordinate deliveries
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-green-900">{stats.total}</p>
              </div>
              <ShoppingBag className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Packed</p>
                <p className="text-2xl font-bold text-blue-600">{stats.packed}</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-green-900">Recent Orders</h2>
        
        {orders.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No orders yet</p>
            </CardContent>
          </Card>
        ) : (
          orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      Order #{order.id}
                    </CardTitle>
                    <p className="text-sm text-gray-500">
                      {new Date(order.orderDate).toLocaleString()}
                    </p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    <span className="flex items-center gap-1">
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Customer Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-green-900">Customer Information</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4 text-green-600" />
                      {order.customerName}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-green-600" />
                      {order.customerPhone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-green-600" />
                      {order.customerEmail}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-green-900 mb-2">Delivery Address</h3>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                      <span>{order.deliveryAddress}</span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="font-semibold text-sm text-green-900 mb-2">Order Items</h3>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.plant.id} className="flex justify-between text-sm">
                        <span className="text-gray-700">
                          {item.plant.name} x {item.quantity}
                        </span>
                        <span className="font-semibold text-gray-900">
                          ${(item.plant.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between font-semibold text-green-900">
                      <span>Total Amount</span>
                      <span>${order.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {!order.deliveryPersonNotified && (
                    <Button
                      onClick={() => handleNotifyDelivery(order.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send WhatsApp Notification
                    </Button>
                  )}
                  
                  {order.deliveryPersonNotified && (
                    <Badge className="bg-green-100 text-green-700 border-green-300 px-3 py-1">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Delivery Person Notified
                    </Badge>
                  )}

                  {order.status === 'pending' && (
                    <Button
                      variant="outline"
                      onClick={() => handleUpdateStatus(order.id, 'packed')}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Mark as Packed
                    </Button>
                  )}

                  {order.status === 'packed' && (
                    <Button
                      variant="outline"
                      onClick={() => handleUpdateStatus(order.id, 'delivered')}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark as Delivered
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* WhatsApp Integration Info */}
      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">
                WhatsApp Notification System
              </h3>
              <p className="text-sm text-blue-800">
                When you click "Send WhatsApp Notification", both the admin and delivery person 
                will receive an automated message with order details, customer information, and 
                delivery address. The delivery person can then pack the items and deliver them 
                to the customer.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
