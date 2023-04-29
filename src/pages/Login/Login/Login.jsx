
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import './Login.css'
import { useState } from 'react';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {signIn}=useContext(AuthContext)
  const navigate = useNavigate()
const location= useLocation();
const from = location.state?.from?.pathname || '/';


  const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result=>{
  const loggedUser = result.user
  console.log(loggedUser);
  navigate(from, {replace:true})
    })
    .catch(error=>{
      console.log(error);
    })
  }




    return (
        <div style={{backgroundImage: 'url("https://wallpaperaccess.com/full/1858883.jpg")', backgroundSize: 'cover', height:'650px',  width: '100%', padding:'40px'}}>
 <Container className='mx-auto' style={{border: '1px solid blue', borderRadius: '10px', height: '500px', padding:'50px', marginTop:'30px', backgroundColor: 'lightgray', width: '30%',  backgroundImage: 'url("https://wallpaperaccess.com/full/1858883.jpg")', backgroundSize: 'cover', }}>
            <h2 className='fw-bold text-light'>Please LogIn</h2>
           <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold text-light'>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email"  required/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold text-light'>Password</Form.Label>
        <div className="input-group">
          <Form.Control type={showPassword ? "text" : "password"} name='password' placeholder="Password" required />
          <Button variant="outline-secondary" onClick={togglePasswordVisibility} style={{ color: '#fff',  backgroundColor: '#6c757d' }}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </div>
      </Form.Group>
      <Form.Group className="mb-3  text-light fw-bold" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

     
      <Button variant="primary" type="submit">  LogIn </Button>
      <br />
      
      <Form.Text className="text-light fw-bold">
      Dont’t Have An Account ?
      <Link className='text-danger text-decoration-none' to="/register"> Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
        
        </Form.Text>
      <Form.Text className="text-danger">
        
        </Form.Text>
    </Form>
        </Container>
        </div>


       
    );
};

export default Login;