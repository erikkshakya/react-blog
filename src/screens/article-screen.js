import React from "react";
import {useSelector} from "react-redux"

const ArticleScreen = () => {
  const articleList = useSelector((state) => state.articlesList);
  const subarticlesList = useSelector((state) => state.subarticlesList);
  return <div>helloo</div>;
};

export default ArticleScreen;
