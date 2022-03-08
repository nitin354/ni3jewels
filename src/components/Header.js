import React,{useContext, useEffect,useState} from 'react'
import { Navbar,NavDropdown,Container,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Cartstate } from '../Context/cartcontext';
//import { cartContext } from '../Context/cartcontext';


export default function Header(props) {
  const {state:{cart}}=Cartstate();
  // const [cart, setCart] = useContext(cartContext);
  // let cart_count = localStorage.getItem("cart_count");

  return (
    <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><Link to="/">Ni3 jewels</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link className="navbar-dark navbar-brand" to="/diamonds">Diamonds</Link>
        <Link className="navbar-dark navbar-brand" to="/engagement">Engagement</Link>
        <Link className="navbar-dark navbar-brand" to="/wedding">Wedding</Link>
      </Nav>
      <Link className="navbar-dark navbar-brand" to="/login">Login</Link>
      <Link className="navbar-dark navbar-brand" to="/cart">Cart ({cart.length})</Link>
    </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}
