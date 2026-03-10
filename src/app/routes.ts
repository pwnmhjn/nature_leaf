import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Nurseries } from './pages/Nurseries';
import { Admin } from './pages/Admin';
import { OrderConfirmation } from './pages/OrderConfirmation';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'nurseries', Component: Nurseries },
      { path: 'admin', Component: Admin },
      { path: 'order-confirmation/:orderId', Component: OrderConfirmation }
    ]
  }
]);
