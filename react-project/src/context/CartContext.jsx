import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const [cart, setCart] = useState([]);

  // Load the logged-in user's cart
  useEffect(() => {
    if (!user) {
      setCart([]);
      return;
    }

    const savedCart = localStorage.getItem(
      `cart_${user.email}`
    );

    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, [user]);

  // Save the logged-in user's cart
  useEffect(() => {
    if (!user) return;

    localStorage.setItem(
      `cart_${user.email}`,
      JSON.stringify(cart)
    );
  }, [cart, user]);

  const addToCart = (product) => {
    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    toast.success(`${product.title} added to cart 🛒`);
  };

  const removeFromCart = (id) => {
    const removedItem = cart.find(
      (item) => item.id === id
    );

    setCart(
      cart.filter((item) => item.id !== id)
    );

    if (removedItem) {
      toast.error(
        `${removedItem.title} removed from cart ❌`
      );
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                item.quantity - 1,
                1
              ),
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);