import { Container, Nav, Navbar } from 'react-bootstrap';

import { useState } from 'react';

import Logo from "../../images/logo.svg"
import hamburger from "../../images/icon-hamburger.svg"
import close from "../../images/icon-close.svg"

import "./navigationBar.scss"

function NavigationBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavigation = () => {
    setIsActive((isActive) => !isActive)
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="py-4 navBar">
      <Container className="">
        <header>
            <img src={Logo} alt="logo"/>
        </header>
        <div className={`linksWrapper ${isActive ? 'active' : ''}`}>
          <Nav className="mx-auto links">
            <Nav.Link href="#" className="me-lg-4" onClick={toggleNavigation}>Home</Nav.Link>
            <Nav.Link href="#" className="me-lg-4" onClick={toggleNavigation}>About</Nav.Link>
            <Nav.Link href="#" className="me-lg-4" onClick={toggleNavigation}>Contact</Nav.Link>
            <Nav.Link href="#" className="me-lg-4" onClick={toggleNavigation}>Blog</Nav.Link>
            <Nav.Link href="#" className="me-lg-4" onClick={toggleNavigation}>Careers</Nav.Link>
          </Nav>
        </div>
        <button className="button px-4 py-2">
          Request Invite
        </button>
        <button className="dropdownToggle" onClick={toggleNavigation}>
          {!isActive ? <img src={hamburger} alt="hamburger" /> : <img src={close} alt="close"/>}
        </button>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;