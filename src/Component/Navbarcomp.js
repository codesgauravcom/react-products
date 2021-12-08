import React, { Component } from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import About from './About';
import Contact from './Contact'
import Home from './Home';
import Nike from './Nike';
import Adidas from './Adidas';
import Pricing from './Pricing'
import Checkout from './Checkout'
import News from './News'

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';


export default class Navbarcomp extends Component {
  render() {
    return (
      <Router>
      <Navbar bg="dark" variant={"dark"} expand="lg">
    <Navbar.Brand href="/">Gk Brand</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        <Nav.Link as={Link} to={"/nike"}>Nike</Nav.Link>
        <Nav.Link as={Link} to={"/adidas"}>Adidas</Nav.Link>
        <Nav.Link as={Link} to={"/pricing"}>Pricing</Nav.Link>
        <Nav.Link as={Link} to={"/checkout"}>Checkout</Nav.Link>


        
        <Nav.Link as={Link} to={"/news"}>News</Nav.Link>

        
        
      </Nav>
     
      
    </Navbar.Collapse>
</Navbar>
      <div>
        <Switch>
          <Route path="/about">
          <About/> 
          </Route>
          <Route path="/contact">
          <Contact/> 
          </Route>
          <Route  path="/nike">
          <Nike/> 
          </Route>
          <Route  path="/adidas">
          <Adidas/>
          </Route>
          <Route  path="/pricing">
          <Pricing/>
          </Route>
          <Route path="/checkout">
          <Checkout/> 
          </Route>
          <Route path="/news">
          <News/> 
          </Route>
          <Route  path="/">
          <Home/> 
          </Route>
          
          
          
          
        </Switch>
      </div>
      </Router>
    )
  }
}
