import React, { useContext } from "react";
import './Header.css'
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  const {user}=useContext(AuthContext);

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee className="text-danger fw-bold" speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... I can be a React component,
          multiple React components, or just some ! text.... First Human
          Settlement on Mars Successfully Established, Opening New Era of Space
          Colonization.......
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features" className="fw-bold"><Link className=" text-decoration-none" to="/category/0">Home</Link></Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold"><Link className=" text-decoration-none" to="">About</Link></Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold"><Link className=" text-decoration-none" to="">Career</Link></Nav.Link>
            </Nav>
            <Nav>
            { user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>}
              <Nav.Link eventKey={2} href="#memes">
            { user?  
             <Button className="fw-bold" variant="secondary"> LogOut </Button> :
           <Link to="/login">
             <Button className="fw-bold" variant="secondary"> LogIn </Button>
           </Link>
            
            
            }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
