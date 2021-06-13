import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createArticle,
  listArticlesDetails,
  updateArticles,
} from "../actions/articles-action";
import {listCategory} from "../actions/category-actions"
import FormData from "form-data";

const ArticleEdit = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    dispatch(listCategory);
  }, [dispatch]);

  const { article } = useSelector((state) => state?.articleDetails);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
  });
  const { title, description, image } = product;
  // const [file, setFile] = useState({
  //   image: "",
  // });
  console.log("......", article);
  useEffect(() => {
    if (article) {
      setProduct(article);
    }
  }, [article]);

  // const a = useSelector((state) =>
  //   state.articlesList.articles.find((art) => art?.slug === slug)
  // );
  // console.log("aaa", a);

  // useEffect(() => {
  //   const article = articles?.find((a) => a?.slug === slug);
  //   setProduct(article);
  // }, []);

  // console.log(articles);
  // const article = Array(articles).find((art) => art?.slug === slug);

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");

  // useEffect(() => {
  //   if (article) {
  //     setProduct(article);
  //   }
  // }, [article]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("image", product.image);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    if (slug) {
      dispatch(updateArticles(slug, formData));
    } else {
      dispatch(createArticle(formData));
    }
    history.push("/");
  };

  return (
    <>
      <div className="card border-0 shadow">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={title}
                // onChange={(e) => setTitle(e.target.value)}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
                placeholder="Enter the Dragon "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                // onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter the Email "
              />
            </div>
            <div className="form-group">
              <input
                id="post-image"
                // onChange={(e) => setFile(e.target.files[0])}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.files[0] })
                }
                name="image"
                type="file"
              />
              <img src={image} alt={title} height="50px" />
            </div>
            <button className="btn btn-danger" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ArticleEdit;
