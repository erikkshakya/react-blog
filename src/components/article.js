import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Article = ({ art }) => {
  return (
    // <div className="article-box">
    //   <h2>{art.title}</h2>
    //   <img src={art.image} alt={art.title} />
    // </div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={art.image} />
      <Card.Body>
        <Card.Title>{art.title}</Card.Title>
        <Card.Text>{art.description}</Card.Text>
        <Link to={`/article/edit/${art.slug}`}>
          <Button variant="primary">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Article;
