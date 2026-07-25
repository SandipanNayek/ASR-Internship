import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      toast.info(`${product.name} is already in your wishlist ❤️`);
      return;
    }

    setWishlist([...wishlist, product]);
    toast.success(`${product.name} added to wishlist ❤️`);
  };

  const removeFromWishlist = (id) => {
    const removedItem = wishlist.find((item) => item.id === id);

    setWishlist(wishlist.filter((item) => item.id !== id));

    if (removedItem) {
      toast.error(`${removedItem.name} removed from wishlist 💔`);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);