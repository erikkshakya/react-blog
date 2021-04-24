import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSubArticle } from "../actions/subarticles-actions";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { listArticles } from "../actions/articles-action";
import FormData from "form-data";

const SubArticleEdit = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);
  const articleList = useSelector((state) => state.articlesList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [available_on, setAvailable_on] = useState("");
  const [maintitle, setMainTitle] = useState({
    maintitle: [],
  });

  const selectHandler = (e) => {
    const selected = [];
    let selectedOption = e.target.selectedOptions;

    for (let i = 0; i < selectedOption.length; i++) {
      selected.push(selectedOption[i].value);
    }
    console.log("aaaaaaaaaaaaaaaa", selected);
    const final = selected.map(Number);

    setMainTitle({ ...maintitle, [e.target.name]: selected });
    console.log("!!!!!!!!!!", selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("#######", maintitle);
    let formData = new FormData();
    console.log("#############");
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("available_on", available_on);
    formData.append("maintitle", maintitle.maintitle);
    dispatch(createSubArticle(formData));
    history.push("/")
  };
  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <button onClick={()=>console.log(articleList)}>erty</button>
        <Form.Control
          type="text"
          placeholder="The Wolf WatchMan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id="exampleFormControlFile1"
          label="Upload Image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <select
        class="selectpicker"
        name="maintitle"
        data-live-search="true"
        onChange={selectHandler}
      >
        {articleList.map((art) => (
          <option value={art.id}>{art.title}</option>
        ))}
      </select>

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Avaliable On</Form.Label>
        <Form.Control
          type="text"
          placeholder="Bonish Store"
          value={available_on}
          onChange={(e) => setAvailable_on(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SubArticleEdit;
