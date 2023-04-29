import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaCalendar } from 'react-icons/fa';
import moment from 'moment';


const CategoryDetails = () => {
    return (
        <Row xs={1} md={2} lg={1} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
         
              <Card.Text className='fw-bold text-secondary'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className='text-secondary d-flex align-items-center'>
             <FaCalendar/>
             <p className='ms-2'>{moment().format("MMMM D, YYYY")}</p>
             </div>
            </Card.Body>
          </Card>
        </Col> 
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              
              <Card.Text className='fw-bold text-secondary'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className='text-secondary d-flex align-items-center'>
             <FaCalendar/>
             <p className='ms-2'>{moment().format("MMMM D, YYYY")}</p>
             </div>
            </Card.Body>
          </Card>
        </Col> 
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
        
              <Card.Text className='fw-bold text-secondary'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
             <div className='text-secondary d-flex align-items-center'>
             <FaCalendar/>
             <p className='ms-2'>{moment().format("MMMM D, YYYY")}</p>
             </div>
            </Card.Body>
          </Card>
        </Col> 
    </Row>
    );
};

export default CategoryDetails;