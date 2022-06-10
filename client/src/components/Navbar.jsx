import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
  NavItem, Button, NavLink, Modal, ModalBody, ModalHeader, FormGroup, Label, 
  Input, Form, FormText } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createShop, updateShop } from '../redux/actions/shops';


function NavbarComponent({ currentId, setCurrentId }) {

  const [isNavOpen,setIsNavOpen] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [shopData,setShopData] = useState({ area: '', name: '', categories: '', selectedFile: '', openingAt: '', closingAt: '' })
  const shop = useSelector((state) => (currentId ? state.shops.find((p) => p._id === currentId) : null));


  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (shop) setShopData(shop);
  }, [shop]);

  const toggleNav = ()=>{
    setIsNavOpen(()=>!isNavOpen);
  }
  const toggleModal = ()=>{
    setIsModalOpen(()=> !isModalOpen);
  }
  const handdleSubmit = (e)=>{
    e.preventDefault();

    if(currentId === 0){
      dispatch(createShop(shopData));
    }else{
      dispatch(updateShop(currentId, shopData));
    }
    toggleModal();
    navigate('/');
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
              <Link to="about" style={{ textDecoration: 'none' }}>
              <NavItem>
                <NavLink>
                  About us
                </NavLink>
              </NavItem>
              </Link>
              </Nav>
              <Nav>
                <NavItem>
                <Button color="info" onClick={toggleModal}>Add Shop</Button>
                </NavItem>
              </Nav>
              <NavItem className='list-unstyled ps-3'>
                <Button color="info">Log In</Button>
              </NavItem>
            </Collapse>
          </Navbar>
          <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader>{currentId ? `Editing "${shop.name}"` : 'Creating a New Shop'}</ModalHeader>
            <ModalBody>
              <Form onSubmit={handdleSubmit}>
                <FormGroup>
                  <Label htmlFor='shopname'>Shop name</Label>
                  <Input type="text" id='shopname' name='shopname' value={shopData.name} onChange={(e)=> setShopData({...shopData, name: e.target.value})} placeholder="Enter Name Of Shop" />           
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='area'>Location Area</Label>
                  <Input type="text" id='area' name='area' value={shopData.area} onChange={(e)=> setShopData({...shopData, area: e.target.value})} placeholder="Enter location" />           
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='area'>Categories</Label>
                  <Input type="text" id='categories' name='categories' value={shopData.categories} onChange={(e)=> setShopData({...shopData, categories: e.target.value.split(',')})} placeholder="use comma to add more categories as tags" />           
                </FormGroup>
                <FormGroup>
                <Input type="date" name='openingAt' value={shopData.openingAt} onChange={(e)=> setShopData({...shopData, openingAt: e.target.value})} />
                  <FormText>Opening date</FormText>
                </FormGroup>
                <FormGroup>
                  <Input type="date" name='closingAt' value={shopData.closingAt} onChange={(e)=> setShopData({...shopData, closingAt: e.target.value})} />
                  <FormText>Closing date</FormText>
                </FormGroup>
                <FormGroup>
                  <FileBase type="file" multiple={false} onDone={({ base64 })=> setShopData({ ...shopData, selectedFile: base64})} />
                  <FormText>please upload shop image</FormText>
                </FormGroup>
                <FormGroup>
                  <Button type='submit' value='submit' color='primary' >
                      Add
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </>
    );
}

export default NavbarComponent;