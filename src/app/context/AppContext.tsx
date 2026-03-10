import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Order, Plant } from '../data/mockData';

interface AppContextType {
  cart: CartItem[];
  orders: Order[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  createOrder: (orderDetails: Omit<Order, 'id' | 'orderDate' | 'deliveryPersonNotified'>) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  notifyDeliveryPerson: (orderId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (plant: Plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.plant.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.plant.id !== plantId));
  };

  const updateQuantity = (plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.plant.id === plantId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.plant.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const createOrder = (orderDetails: Omit<Order, 'id' | 'orderDate' | 'deliveryPersonNotified'>) => {
    const newOrder: Order = {
      ...orderDetails,
      id: `ORD-${Date.now()}`,
      orderDate: new Date().toISOString(),
      deliveryPersonNotified: false
    };
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const notifyDeliveryPerson = (orderId: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, deliveryPersonNotified: true } : order
      )
    );
  };

  return (
    <AppContext.Provider
    
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
        createOrder,
        updateOrderStatus,
        notifyDeliveryPerson
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
