import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useShoppingCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const getItemQuantity = (id) => {
		const foundItem = cartItems.find(
			(item) => item.item && item.item.id === id
		);
		return foundItem ? foundItem.quantity : 0;
	};

	const increaseCartQuantity = (id) => {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.item.id === id) == null) {
				return [...currItems, { item: { id }, quantity: 1 }];
			} else {
				return currItems.map((item) => {
					if (item.item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id) => {
		setCartItems((currItems) => {
			const foundItem = currItems.find((item) => item.item.id === id);
			if (foundItem && foundItem.quantity === 1) {
				return currItems.filter((item) => item.item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeFromCart = (id) => {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.item.id !== id);
		});
	};

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
