import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
  const [favoritesItems, setFavoritesItems] = useState(localStorage.getItem('favoritesItems') ? JSON.parse(localStorage.getItem('favoritesItems')) : []);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
  };

  const addToFavorites = (item) => {
    const isItemInFavorites = favoritesItems.find((favoriteItem) => favoriteItem.id === item.id);

    if (isItemInFavorites) {
      setFavoritesItems(
        favoritesItems.map((favoriteItem) =>
          favoriteItem.id === item.id
            ? { ...favoriteItem, quantity: favoriteItem.quantity + 1 }
            : favoriteItem
        )
      );
    } else {
      setFavoritesItems([...favoritesItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromFavorites = (item) => {
    setFavoritesItems(favoritesItems.filter((favoriteItem) => favoriteItem.id !== item.id));
  };

  const clearFavorites = () => {
    setFavoritesItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favoritesItems", JSON.stringify(favoritesItems));
  }, [favoritesItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favoritesItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
