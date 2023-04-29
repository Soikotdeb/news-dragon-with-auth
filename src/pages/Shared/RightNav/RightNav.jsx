import React from "react";
import './RightNav.css'
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa";
import Qzone from "../Q-zone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h2 className="fw-bold">Login With</h2>
      <Button className="mb-2" variant="outline-secondary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With Github
      </Button>
      <div>
        <h4 className="mt-3 fw-bold">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook/>  Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/>  Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/>  Instagram</ListGroup.Item>
          <ListGroup.Item> <FaYoutube/>  Youtube</ListGroup.Item>
          
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div class="container">
      <img class="image" src={bg} alt="" />
      <div class="text">
        <h3 className="fw-bold">Create an Amazing Newspaper</h3>
        <p><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
        <Button variant="danger" size="lg">
        <span className="fw-bold">Learn More</span>
        </Button>{' '}
      </div>
    </div>
    </div>
  );
};

export default RightNav;
