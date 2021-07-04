import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {deleteSubArticles} from "../../actions/subarticles-actions";

const Article = ({art}) => {
    const dispatch = useDispatch();
    const {slug} = art
    const deleteItem = () => {
        dispatch(deleteSubArticles(slug));
    };
    return (
        <>
                <div className="art__grid">
                    <Link className="art__link" to={`/article/${slug}`}>
                        <div className="art__img">
                            <img src={art.image} alt=""/>
                        </div>
                        <div className="art__content">
                            <h2>{art.title}</h2>
                        </div>
                        <div className="art__btn">
                            <Link to={`/article/edit/${slug}`} className="btn btn-outline-primary">
                                Edit
                            </Link>
                            <button className="btn btn-outline-danger" onClick={deleteItem}>Delete</button>
                        </div>
                    </Link>
                </div>
        </>
    );
};

export default Article;
