import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { listArticlesDetails } from "../actions/articles-action";
import LoadingBox from "../components/loading.box";
import MessageBox from "../components/mesage.box";

const ArticleScreen = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const articleDetails = useSelector((state) => state.articleDetails);
  const { article, loading, error } = articleDetails;
  useEffect(() => {
    dispatch(listArticlesDetails(slug));
  }, [dispatch, slug]);

  console.log(articleDetails);
  console.log(article);
  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div
          className="container"
          
        >
          <div className="row">
            <div className="card">
              <div className="post-heading">
                <h1>{article?.title}</h1>
                <h2>{article?.description}</h2>
                <img src={article?.image} alt={article?.title}/>
              </div>
            </div>
          </div>
          <div className="row">
            {article?.subtitle?.map((sub) => (
              <div class="card">
                <h2>{sub?.title}</h2>
                <h4>{sub?.description}</h4>
                <img src={sub?.image} alt={sub?.title} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleScreen;
