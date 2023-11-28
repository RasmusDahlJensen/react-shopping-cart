import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

const CartContext = createContext({});

export const useShoppingCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

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

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				openCart,
				closeCart,
			}}
		>
			{children}
			<ShoppingCart isOpen={isOpen} />
		</CartContext.Provider>
	);
};
