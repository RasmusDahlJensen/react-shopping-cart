import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export const ProductItem = ({ id, title, price, thumbnail }) => {
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
			</Card.Body>
		</Card>
	);
};
