import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import {deleteSubArticles} from "../actions/subarticles-actions";

const Article = ({art}) => {
    const dispatch = useDispatch();
    const {slug} = art
    const deleteItem = () => {
        dispatch(deleteSubArticles(slug));
    };
    return (
        <Card style={{width: "18rem"}}>
            <Link to={`/article/${slug}`}>
                <Card.Img variant="top" src={art.image}/>
            </Link>
            <Card.Body>
                <Link to={`/article/${slug}`}>
                    <Card.Title>{art.title}</Card.Title>
                </Link>
                <Card.Text>{art.description}</Card.Text>
                <Link to={`/article/edit/${slug}`}>
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
