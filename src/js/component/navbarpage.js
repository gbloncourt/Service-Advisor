import React from "react";
import { Link } from "react-router-dom";

import {
	Nav,
	Navbar,
	NavDropdown,
	MenuItem,
	Tabs,
	ButtonToolbar,
	Button,
	Table,
	ButtonGroup,
	Row,
	Col,
	Grid,
	Panel,
	FormGroup,
	FormControl,
	Form
} from "react-bootstrap";
import logo from "./../../img/Service_Advisor_logo.png";

{
	/*
	 */
}
export const NavbarPage = () => {
	return (
		<Navbar bg="mycolor" expand="lg" sticky="top">
			<Navbar.Brand as={Link} to="/">
				<img src={logo} className="d-inline-block align-top" width="282" height="60" alt="Service Advisor" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/">
						HOME
					</Nav.Link>
					<Nav.Link as={Link} to="/services">
						SERVICES
					</Nav.Link>
					<Nav.Link as={Link} to="/providers">
						PROVIDERS
					</Nav.Link>
					<Nav.Link as={Link} to="/login">
						<i className="fas fa-user" style={{ padding: "0 5px 0 0" }} />
					</Nav.Link>
					<Form inline>
						<FormControl type="text" placeholder="Find the best provider" className="mr-sm-2" />
						<Button variant="outline-dark">Search</Button>
					</Form>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
