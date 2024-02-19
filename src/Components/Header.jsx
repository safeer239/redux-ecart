import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
      const wishlist = useSelector((state)=>state.wishlistReducer)
      const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
        <Navbar  collapseOnSelect expand="lg" className=" sticky-top bg-body-tertiary">
      <Container>
        <Navbar.Brand  ><Link to={'/'} style={{textDecoration:'none'}}><i className='fa-solid fa-shopping-cart me-3'></i>Shop N Shoppee!</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='gap-2'>
            <Link to={"/wishlist"} style={{textDecoration:'none',marginTop:'10px'}}><i className='fa-solid fa-heart text-danger'></i>Wishlist
      <Badge pill bg="primary">
       {wishlist.length}
      </Badge> </Link>
            <Link  to={"/cart"} style={{textDecoration:'none',marginTop:'10px'}}><i className='fa-solid fa-cart-shopping text-info'></i>
              Cart
      <Badge pill bg="primary">
        {cart.length}
      </Badge> 
            </ Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header