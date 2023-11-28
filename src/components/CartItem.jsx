import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export const CartItem = ({ item, quantity, price }) => {
	const [productData, setProductData] = useState(null);
	const { removeFromCart } = useShoppingCart();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${item.id}`)
			.then((res) => res.json())
			.then((json) => {
				setProductData({ ...json, id: item.id });
			});
	}, [item.id]);

	if (!productData) {
		return null;
	}

	return (
		<Stack direction="horizontal" gap={2}>
			<img
				src={productData.thumbnail}
				alt={`Product thumbnail for ${productData.title}`}
				style={{ width: "125px", height: "75px", objectFit: "cover" }}
			/>
			<div className="me-auto">
				<div>
					{productData.title}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".85rem" }}>
							{quantity}x
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".95rem" }}>
					{formatCurrency(productData.price)}
				</div>
			</div>
			<div>{formatCurrency(productData.price * quantity)}</div>
			<Button
				variant="outline-danger"
				size="sm"
				onClick={() => removeFromCart(productData.id)}
			>
				&times;
			</Button>
		</Stack>
	);
};
