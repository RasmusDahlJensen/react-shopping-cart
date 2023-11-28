import { Offcanvas } from "react-bootstrap";
import React from "react";
import { useShoppingCart } from "../context/CartContext";

export const ShoppingCart = ({ isOpen }) => {
	const { closeCart } = useShoppingCart();
	return (
		<Offcanvas show={isOpen} placement="end" onHide={closeCart}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
		</Offcanvas>
	);
};
