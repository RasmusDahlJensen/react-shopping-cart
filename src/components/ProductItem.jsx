import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContext";

export const ProductItem = ({ id, title, price, thumbnail }) => {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();

	const quantity = getItemQuantity(id);

	return (
		<Card>
			<Card.Img
				variant="top"
				src={thumbnail}
				height="200px"
				style={{ objectFit: "cover" }}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
					<span className="fs-4">{title}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseCartQuantity(id)}>
							+ Add to cart
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: ".5rem" }}
							>
								<Button onClick={() => increaseCartQuantity(id)}>+</Button>
								<div>
									<span className="fs-5">{quantity} in cart</span>
								</div>
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
							</div>
							<Button variant="danger" onClick={() => removeFromCart(id)}>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};
