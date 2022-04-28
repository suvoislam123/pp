import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "./styles/header.css";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Navbar bg="dark" expand="lg" className="py-5">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="brand-text">BD Tour Guid</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-5 my-lg-0" style={{ maxHeight: "300px" }}>
            <Nav.Link className="mx-4" as={Link} to="/home">
              <span className="menu-item">Home</span>
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/services">
              <span className="menu-item">Services</span>
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/about">
              <span className="menu-item">About Us</span>
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/spots">
              <span className="menu-item">Spots</span>
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/blogs">
              <span className="menu-item">Blogs</span>
            </Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/contact">
              <span className="menu-item">Contact</span>
            </Nav.Link>
          </Nav>
          {
          user? <div className="account-container">
          <DropdownButton className="rounded-lg" variant="secondary" id="dropdown-basic-button" title={<AccountCircleIcon />}>
            <Dropdown.Item as={Link} to="">{user?.displayName}</Dropdown.Item>
            <Dropdown.Item as={Link} to="">Profile Setting</Dropdown.Item>
            <Dropdown.Item as={Link} to="">Notification</Dropdown.Item>
            <Dropdown.Item as={Link} to="">My Trips</Dropdown.Item>
            <Dropdown.Item onClick={()=>signOut(auth)}>LogOut</Dropdown.Item>
          </DropdownButton>
        </div>:<Nav.Link className="mx-4" as={Link} to="/login">
          <span className="menu-item">Login</span>
        </Nav.Link>
        }
        </Navbar.Collapse>
        
        
        
      </Container>
    </Navbar>
  );
};

export default Header;
