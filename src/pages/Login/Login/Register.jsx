import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';
import './register.css'


const Register = () => {
  const {createUser}=useContext(AuthContext);
const [accepted,setAccepted]=useState(false)
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};


  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;  
    const email = form.email.value;
    const password = form.password.value;

console.log(email,password,photo,name);
createUser(email,password)
.then(result=>{
  const createdUser = result.user;
  console.log(createdUser);
  
})
.catch(error=>{
    console.log(error);
})
  }

  const handleAccepted = event =>{
  setAccepted(event.target.checked)
  
  }


    return (
      <Container className='mx-auto mt-5' style={{border: '1px solid blue', borderRadius: '10px', height: '600px', padding:'50px', marginTop:'30px', backgroundColor: 'lightgray', maxWidth: '500px', width: '100%', backgroundImage: 'url("https://wallpaperaccess.com/full/1858883.jpg")', backgroundSize: 'cover'}}>

        <h2 className='fw-bold text-secondary'>Please LogIn</h2>
       <Form onSubmit={handleRegister} style={{margin: '20px'}}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fw-bold text-secondary' style={{fontSize: '1rem'}}>Name</Form.Label>
<Form.Control type="text" name='name' placeholder="Enter Name" style={{fontSize: '0.9rem'}} required/>

  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fw-bold text-secondary'>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Enter Photo URL"  required/>
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fw-bold text-secondary'>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email"  required/>
  
  </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold text-secondary'>Password</Form.Label>
        <div className="input-group">
          <Form.Control type={showPassword ? "text" : "password"} name='password' placeholder="Password" required />
          <Button variant="outline-secondary" onClick={togglePasswordVisibility} style={{ color: '#6c757d', backgroundColor: '#f8f9fa', border: 'none' }}>
            {showPassword ? "Hide" : "Show "}
          </Button>
        </div>
      </Form.Group>
  <Form.Group className="mb-3  text-secondary fw-bold" controlId="formBasicCheckbox">
    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept<Link className='text-decoration-none' to="/terms">Term & Conditions</Link> </>} />
  </Form.Group>

 
  <Button variant="primary" disabled={!accepted} type="submit" style={{padding: '5px 10px', fontSize: '0.9rem'}}>Register</Button>

  <br />
  
  <Form.Text className="text-secondary fw-bold">
  Already Have An Account ?
  <Link className='text-danger text-decoration-none' to="/login"> LogIn</Link>
    </Form.Text>
  <Form.Text className="text-success">
    
    </Form.Text>
  <Form.Text className="text-danger">
    
    </Form.Text>
</Form>
    </Container>
    );
};

export default Register;