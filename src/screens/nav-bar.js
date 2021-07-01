import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { signout } from "../actions/user-actions";

const NavBar = (props) => {
  const {toggleMenu} = props
  const {sideBarOpen} = props
  const dispatch = useDispatch();
  const user = localStorage.getItem("access_token");
  // const [isOpen, setIsOpen] = useState(false)
  //

  return (
    <div>
      <Navbar bg="dark" variant="dark" id="navbar">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href={`/article`}>Add</Nav.Link>
          <Nav.Link href={`/sub`}>Add Sub</Nav.Link>
        </Nav>
        <Form inline>
          {user ? (
            <Nav.Link href="/logout" onClick={() => dispatch(signout())}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link href="/user/login">Login</Nav.Link>
          )}
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
