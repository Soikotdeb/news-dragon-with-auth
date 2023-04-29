import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogOut = ()=>{
      logOut()
      .then()
      .catch(error=>{
        console.log(error);
      })
    }
    
    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-3 fw-bold">
            <Link className=" text-decoration-none" to="/">Home</Link>
            <Link className=" text-decoration-none" to="/">About</Link>
            <Link className=" text-decoration-none" to="/">Career</Link>
            </Nav>
            <Nav>
            { user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>}
             
            { user?  
             <Button onClick={handleLogOut} className="fw-bold" variant="secondary"> LogOut </Button> :
           <Link to="/login">
             <Button className="fw-bold" variant="secondary"> LogIn </Button>
           </Link>
            }
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;