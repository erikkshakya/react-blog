import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { deleteArticle } from "../actions/articles-action";
import { deleteSubArticles } from "../actions/subarticles-actions";

const Article = ({ art }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteSubArticles(art.slug));
    console.log("item deleted");
  };
  return (
      <Card style={{ width: "18rem" }}>
        <Link to={`/article/${art.slug}`}>
          <Card.Img variant="top" src={art.image} />
        </Link>
        <Card.Body>
          <Link to={`/article/${art.slug}`}>
            <Card.Title>{art.title}</Card.Title>
          </Link>
          <Card.Text>{art.description}</Card.Text>
          <Link to={`/article/edit/${art.slug}`}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="danger" onClick={deleteItem}>
            Delete
          </Button>
        </Card.Body>
      </Card>
  );
};

export default Article;
