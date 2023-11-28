import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Navbar = () => {
	return (
		<NavbarBs className="shadow-sm mb-3 bg-white">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to={"/"} as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to={"/store"} as={NavLink}>
						Store
					</Nav.Link>
					<Nav.Link to={"/about"} as={NavLink}>
						About
					</Nav.Link>
				</Nav>
				<Button
					style={{ width: "3rem", height: "3rem", position: "relative" }}
					variant="outline-primary"
					className="rounded-circle"
				>
					<Icon icon="mi:shopping-cart" width={25} />
					<div
						className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
						style={{
							color: "white",
							width: "1.5rem",
							height: "1.5rem",
							position: "absolute",
							bottom: 0,
							right: 0,
							transform: "translate(25%, 25%)",
						}}
					>
						3
					</div>
				</Button>
			</Container>
		</NavbarBs>
	);
};