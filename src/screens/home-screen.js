import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "../components/article";
import { listArticles } from "../actions/articles-action";
import { listSubArticles } from "../actions/subarticles-actions";
import LoadingBox from "../components/loading.box";
import MessageBox from "../components/mesage.box";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listArticles());
    dispatch(listSubArticles());
  }, [dispatch]);

  const articlesList = useSelector((state) => state.articlesList);
  const { loading, articles, error } = articlesList;
  return (

    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row">
          {articles.map((art) => (
            <Article key={art['slug']} art={art} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
