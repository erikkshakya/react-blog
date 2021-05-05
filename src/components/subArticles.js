import React from "react";
import { useParams } from "react-router-dom";

const SubArticles = ({ sub }) => {
    const {slug} = useParams()
  return (
    <>
    <button onClick={()=>console.log(slug)}>asas</button>
      <div key={sub.slug} className="card">
        <a href={`/sub/${slug}`}>
          <img className="medium" src={sub.image} alt={sub.title} />
        </a>
        <div className="card-body">
          <a href={`/sub/${slug}`}>
            <h2>{sub.title}</h2>
          </a>
          <div className="description">${sub.description}</div>
        </div>
      </div>
    </>
  );
};

export default SubArticles;
