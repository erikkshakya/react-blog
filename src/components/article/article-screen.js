import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {listArticlesDetails} from "../../actions/articles-action";
import LoadingBox from "../loading.box";
import MessageBox from "../mesage.box";
import author from '../../photos/author.jpeg'

const ArticleScreen = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();

    const articleDetails = useSelector((state) => state.articleDetails);
    const {article, loading, error} = articleDetails;
    useEffect(() => {
        dispatch(listArticlesDetails(slug));
    }, [dispatch, slug]);

    return (
        <>
            {loading ? (
                <LoadingBox/>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <>
                    <div className="container article__grid">
                        <div className="article__link">
                            <h1>{article.title}</h1>
                            <div className="article__img">
                                <img src={article.image} alt=""/>
                            </div>
                            <div className="article__store">
                                <span>By</span>
                                <a href="#">Sydney Baum-Haines</a>
                            </div>
                            <div className="article__content">
                                <p>{article.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="article__grid">
                        {article?.subtitle?.map((sub) => (
                            <div className="article__link">
                                <h2>{sub.title}</h2>
                                <div className="article__img">
                                    {sub.image ? (<img src={sub.image} alt=""/>
                                    ) : (<img src={window.location.origin + '/photos/author.jpeg'} />)}
                                </div>
                                <div className="article__store">
                                    <span>By</span>
                                    <a href="#">Sydney Baum-Haines</a>
                                </div>
                                <div className="article__content">
                                    <p>{sub.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default ArticleScreen;
