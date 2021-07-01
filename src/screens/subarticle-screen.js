import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import Select from 'react-select';
import {listArticles} from "../actions/articles-action";
import {
    createSubArticle,
    listSubArticlesDetails,
    updateSubArticles,
} from "../actions/subarticles-actions";
import LoadingBox from "../components/loading.box";
import MessageBox from "../components/mesage.box";

const SubArticleEdit = () => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const [option, setOption] = useState();
    useEffect(() => {
        dispatch(listArticles());
        dispatch(listSubArticlesDetails(slug));
    }, [dispatch, slug]);
    const {articles, loading, error} = useSelector(
        (state) => state?.articlesList
    );

    const subarticle = useSelector(
        (state) => state?.subarticlesDetails.subarticle
    );

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [available_on, setAvailable_on] = useState("");
    const [maintitle, setMaintitle] = useState({maintitle: []});

    useEffect(() => {
        if (subarticle) {
            setTitle(subarticle?.title);
            setDescription(subarticle?.description);
            setImage(subarticle?.image);
            setAvailable_on(subarticle?.available_on);
            setMaintitle(subarticle?.maintitle?.maintitle);
        }
    }, [subarticle, slug]);

    const selectHandler = (e) => {
        const selected = [];
        let selectedOption = e.target.selectedOptions;

        for (let i = 0; i < selectedOption.length; i++) {
            selected.push(selectedOption[i].value);
        }
        setMaintitle({[e.target.name]: selected});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", title);
        if (image) {
            formData.append("image", image);
        }
        formData.append("description", description);
        formData.append("available_on", available_on);
        formData.append("maintitle", maintitle?.maintitle);

        if (slug) {
            dispatch(updateSubArticles(slug, formData));
        } else {
            dispatch(createSubArticle(formData));
        }
    };
    return (
        <div className="container">
            {loading ? (
                <LoadingBox/>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
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
                                        // onChange={(e) =>
                                        //   setPost({ ... image: e.target.files[0] })
                                        // }
                                        name="image"
                                        type="file"
                                    />
                                    <img src={image} alt={title} height="50px"/>
                                </div>
                                <select
                                    class="selectpicker"
                                    name="maintitle"
                                    data-live-search="true"
                                    value={subarticle?.maintitle}
                                    onChange={selectHandler}
                                >
                                    {articles?.map((art) => (
                                        <option value={art?.id}>{art.title}</option>
                                    ))}
                                </select>
                                {/*<Select*/}
                                {/*    value={[maintitle]}*/}
                                {/*    onChange={selectHandler}*/}
                                {/*    options={articles}*/}
                                {/*    getOptionLabel={({ title }) => title}*/}
                                {/*    getOptionValue={({ id }) => id}*/}
                                {/*/>*/}

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
            )}
        </div>
    );
};

export default SubArticleEdit;
