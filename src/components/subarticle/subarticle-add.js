import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listArticles} from "../../actions/articles-action";
import {
    createSubArticle,
} from "../../actions/subarticles-actions";

const SubArticleAdd = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [available_on, setAvailable_on] = useState("");
    const [maintitle, setMaintitle] = useState("");

    useEffect(() => {
        dispatch(listArticles());
    }, [dispatch]);
    const {articles} = useSelector(
        (state) => state?.articlesList
    );

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        if (image) {
            formData.append("image", image);
        }
        formData.append("description", description);
        formData.append("available_on", available_on);
        if (maintitle) {
            formData.append("maintitle", maintitle);
        }
        dispatch(createSubArticle(formData));
    };
    return (
        <div className="container" style={{margin: 100}}>
            <div className="row center">
                <div className="card border-0 shadow">
                    <div className="card-header">Add Articles</div>
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
                                    id="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    name="image"
                                    type="file"
                                />
                                <img src={image} alt={title} height="50px"/>
                            </div>

                            <select
                                onChange={(e) => setMaintitle(e.target.value)}
                            >
                                <option value={""} selected disabled>Select an option...</option>
                                {articles?.map((art) => (
                                    <option key={art.id} value={art.id}>{art.title}</option>
                                ))}
                            </select>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="description"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={available_on}
                                    onChange={(e) => setAvailable_on(e.target.value)}
                                    placeholder="avaliable on"
                                />
                            </div>

                            <button className="btn btn-danger" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubArticleAdd;
