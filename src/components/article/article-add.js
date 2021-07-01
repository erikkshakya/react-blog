import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    createArticle,
} from "../../actions/articles-action";
import {listCategory} from "../../actions/category-actions"
import FormData from "form-data";

const ArticleAdd = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategory());
    }, [dispatch]);

    const categories = useSelector((state) => state?.categoryList.category)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }
        if (category) {
            formData.append("category", category)
        }
        dispatch(createArticle(formData));
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
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter the Dragon "
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter the Email "
                            />
                        </div>

                        <select
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value={""} disabled>Select an option...</option>
                            {categories?.map((cat) => (
                                <option value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        <div className="form-group">
                            <input
                                id="post-image"
                                onChange={(e) => setImage(e.target.files[0])}
                                name="image"
                                type="file"
                            />
                            <img src={image} alt={title} height="50px"/>
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

export default ArticleAdd;
