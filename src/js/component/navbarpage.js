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
				<img
					src={logo}
					classNameName="d-inline-block align-top"
					width="282"
					height="60"
					alt="Service Advisor"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/">
						HOME
					</Nav.Link>
					<Nav.Link as={Link} to="/">
						SERVICES
					</Nav.Link>
					<Nav.Link as={Link} to="/">
						PROVIDERS
					</Nav.Link>
					<NavDropdown title="LOGIN/SIGNUP" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
					<Form inline>
						<FormControl type="text" placeholder="Find the best provider" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
