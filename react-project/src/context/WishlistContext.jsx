import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();

  const [wishlist, setWishlist] = useState([]);

  // Load current user's wishlist
  useEffect(() => {
    if (!user) {
      setWishlist([]);
      return;
    }

    const savedWishlist = localStorage.getItem(
      `wishlist_${user.email}`
    );

    setWishlist(
      savedWishlist ? JSON.parse(savedWishlist) : []
    );
  }, [user]);

  // Save current user's wishlist
  useEffect(() => {
    if (!user) return;

    localStorage.setItem(
      `wishlist_${user.email}`,
      JSON.stringify(wishlist)
    );
  }, [wishlist, user]);

  const addToWishlist = (product) => {
    const exist = wishlist.find(
      (item) => item.id === product.id
    );

    if (exist) {
      toast.info("Already in wishlist ❤️");
      return;
    }

    setWishlist([...wishlist, product]);
    toast.success(`${product.title} added to wishlist ❤️`);
  };

  const removeFromWishlist = (id) => {
    const removedItem = wishlist.find(
      (item) => item.id === id
    );

    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );

    if (removedItem) {
      toast.error(
        `${removedItem.title} removed from wishlist 💔`
      );
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () =>
  useContext(WishlistContext);