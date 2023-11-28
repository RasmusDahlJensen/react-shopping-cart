import { Offcanvas, Stack } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { CartItem } from "./CartItem";

export const ShoppingCart = ({ isOpen }) => {
	const { closeCart, cartItems } = useShoppingCart();
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		const fetchProductData = async (id) => {
			try {
				const response = await fetch(`https://dummyjson.com/products/${id}`);
				const json = await response.json();
				setProductData((prevData) => [...prevData, { ...json, id }]);
			} catch (error) {
				console.error("Error fetching product data:", error);
			}
		};

		cartItems.forEach((item) => fetchProductData(item.id));
	}, [cartItems]);

	return (
		<Offcanvas show={isOpen} placement="end" onHide={closeCart}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item.item}
							quantity={item.quantity}
							price={item.price}
						/>
					))}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};
