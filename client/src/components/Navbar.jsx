import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Button, NavLink
} from "reactstrap";


function NavbarComponent() {
  const [isNavOpen,setIsNavOpen] = useState(false);

  const toggleNav = ()=>{
    setIsNavOpen(()=>!isNavOpen);
  }
  const toggleModal = ()=>{

  }
    return (
        <>
        <Navbar className='fixed-top' color="primary" expand="md" light style={{ fontSize: '18px' }}>
            <NavbarBrand className="mr-auto">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Our Shops
            </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isNavOpen} navbar>
              <Nav className="me-auto" navbar >
              <Link to="/" style={{ textDecoration: 'none' }}>
              <NavItem>
                <NavLink>
                  Home
                </NavLink>
              </NavItem>
              </Link>
              <Link to="shops" style={{ textDecoration: 'none' }}>
              <NavItem>
                <NavLink>
                  Shops
                </NavLink>
              </NavItem>
              </Link>
              <Link to="about" style={{ textDecoration: 'none' }}>
              <NavItem>
                <NavLink>
                  About us
                </NavLink>
              </NavItem>
              </Link>
              
              </Nav>
              <Nav className="ml-auto" navbar></Nav>
              <NavItem className='list-unstyled'>
                <Button outline onClick={toggleModal}>
                  Post Shop
                </Button>
              </NavItem>
              <NavItem className='list-unstyled ps-4'>
                <Button color="danger">Danger!</Button>
              </NavItem>
            </Collapse>
          </Navbar>
        </>
    );
}

export default NavbarComponent;