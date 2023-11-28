// ShoppingCart.jsx
import { Offcanvas, Stack } from "react-bootstrap";
import React from "react";
import { useShoppingCart } from "../context/CartContext";
import { CartItem } from "./CartItem";

export const ShoppingCart = ({ isOpen }) => {
	const { closeCart, cartItems } = useShoppingCart();
	return (
		<Offcanvas show={isOpen} placement="end" onHide={closeCart}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} item={item.item} quantity={item.quantity} />
					))}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};
