import { Outlet, Link, useLocation } from 'react-router';
import { ShoppingCart, Leaf, Store, Shield } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Layout() {
  const { getCartItemCount } = useAppContext();
  const location = useLocation();
  const cartCount = getCartItemCount();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-green-900">NatureLeaf</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm transition-colors ${
                  isActive('/') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Shop Plants
              </Link>
              <Link
                to="/nurseries"
                className={`text-sm transition-colors flex items-center gap-1 ${
                  isActive('/nurseries') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Store className="w-4 h-4" />
                Nurseries
              </Link>
              <Link
                to="/admin"
                className={`text-sm transition-colors flex items-center gap-1 ${
                  isActive('/admin') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Shield className="w-4 h-4" />
                Admin
              </Link>
            </nav>

            {/* Cart Button */}
            <Link to="/cart">
              <Button variant={isActive('/cart') ? 'default' : 'outline'} className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600 text-white">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4 pb-3">
            <Link
              to="/"
              className={`text-xs flex items-center gap-1 ${
                isActive('/') ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              Shop Plants
            </Link>
            <Link
              to="/nurseries"
              className={`text-xs flex items-center gap-1 ${
                isActive('/nurseries') ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <Store className="w-3 h-3" />
              Nurseries
            </Link>
            <Link
              to="/admin"
              className={`text-xs flex items-center gap-1 ${
                isActive('/admin') ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <Shield className="w-3 h-3" />
              Admin
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold">EcoPlant</span>
              </div>
              <p className="text-sm text-green-100">
                Your trusted partner in sustainable plant delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-green-100">Email: info@ecoplant.com</p>
              <p className="text-sm text-green-100">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <p className="text-sm text-green-100">
                Eco-friendly plant delivery service connecting you with local nurseries.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-800 text-center text-sm text-green-100">
            © 2026 EcoPlant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
