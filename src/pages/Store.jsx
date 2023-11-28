import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Store = () => {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products/category/smartphones")
			.then((res) => res.json())
			.then((json) => {
				setProductData(json.products);
				console.log(json);
			});
	}, []);

	if (!productData || productData.length === 0) {
		return <div>Loading</div>;
	} else {
		return (
			<div>
				<Row md={2} xs={1} lg={3} className="g-3">
					{productData.map((item) => {
						return (
							<Col key={item.id}>
								<ProductItem {...item} />
							</Col>
						);
					})}
				</Row>
			</div>
		);
	}
};
