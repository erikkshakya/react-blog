// import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   createSubArticle,
//   listSubArticles,
//   listSubArticlesDetails,
// } from "../actions/subarticles-actions";
// import { useSelector } from "react-redux";
// import { listArticles } from "../actions/articles-action";
// import FormData from "form-data";

// const SubArticlesScreen = () => {
//   let history = useHistory();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(listArticles());
//   }, [dispatch]);
//   const { articles } = useSelector((state) => state?.articlesList);

//   const [product, setProduct] = useState({
//     title: "",
//     description: "",
//     image: "",
//     available_on: "",
//     maintitle: "",
//   });
//   const { title, description, image, available_on, maintitle } = product;

//   const selectHandler = (e) => {
//     const selected = [];
//     let selectedOption = e.target.selectedOptions;

//     for (let i = 0; i < selectedOption.length; i++) {
//       selected.push(selectedOption[i].value);
//     }
//     console.log("aaaaaaaaaaaaaaaa", selected);
//     const final = selected.map(Number);

//     setProduct({ ...maintitle, [e.target.name]: selected });
//     console.log("!!!!!!!!!!", final);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let formData = new FormData();
//     console.log("#############");
//     formData.append("title", title);
//     formData.append("image", image);
//     formData.append("description", description);
//     formData.append("available_on", available_on);
//     formData.append("maintitle", maintitle);
//     for (let pair of formData.entries()) {
//       console.log(pair[0] + ", " + pair[1]);
//     }

//     dispatch(createSubArticle(formData));
//   };
//   return (
//     <>
//       <div className="card border-0 shadow">
//         <div className="card-header">Add Contact</div>
//         <div className="card-body">
//           <form onSubmit={(e) => handleSubmit(e)}>
//             <div className="form-group">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={title}
//                   onChange={(e) => setPost({ ...post, title: e.target.value })}
//                   placeholder="description"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   id="post-image"
//                   // onChange={(e) => setFile(e.target.files[0])}
//                   onChange={(e) =>
//                     setProduct({ ...product, image: e.target.files[0] })
//                   }
//                   name="image"
//                   type="file"
//                 />
//                 <img src={image} height="100px" />
//               </div>
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 onChange={(e) =>
//                   setProduct({ ...product, description: e.target.value })
//                 }
//                 placeholder="Enter Description "
//               />
//             </div>

//             <div className="form-group">
//               <select
//                 class="selectpicker"
//                 name="maintitle"
//                 data-live-search="true"
//                 onChange={selectHandler}
//               >
//                 {articles?.map((art) => (
//                   <option value={art?.id}>{art.title}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={available_on}
//                 onChange={(e) =>
//                   setProduct({ ...product, available_on: e.target.value })
//                 }
//                 placeholder="Store name"
//               />
//             </div>
//             <button className="btn btn-danger" type="submit">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SubArticlesScreen;
