import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorInsides/EditorsInside';

const News = () => {
    const news = useLoaderData();
    const {
        details,     
        title,
        image_url,
        category_id
      } = news;


    return (
        <div>
            <h2 className='text-secondary fw-bold mb-3'>Dragon News</h2>
            <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className='text-dark fw-bold'>{title}</Card.Title>
        <Card.Text className='text-secondary fw-bold'>
         {details}
        </Card.Text>
       <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft/> All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInside></EditorsInside>
        </div>
    );
};

export default News;