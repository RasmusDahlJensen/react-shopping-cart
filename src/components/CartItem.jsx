// CartItem.jsx
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { Stack } from "react-bootstrap";

export const CartItem = ({ item, quantity }) => {
	const [productData, setProductData] = useState([]);
	const { removeFromCart, cartQuantity } = useShoppingCart();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${item.id}`)
			.then((res) => res.json())
			.then((json) => {
				setProductData((prevData) => [
					...prevData,
					{ ...json, id: item.id, quantity },
				]);
			});
	}, [cartQuantity, setProductData, item.id, quantity]);

	const product = productData.find((p) => p.id === item.id);
	if (!product) {
		return null;
	}

	return (
		<Stack direction="horizontal" gap={2}>
			<img
				src={product.thumbnail}
				alt={`Product thumbnail for ${product.title}`}
			/>
		</Stack>
	);
};
