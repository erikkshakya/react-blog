import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Article = () => {
  const articleList = useSelector((state) => state.articlesList);

    return (
        <div>
             {articleList.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
        </div>
    );
};

export default Article;