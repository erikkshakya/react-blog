import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/user-actions";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
    // localStorage.setItem("userInfo", JSON.stringify(user.email));
    history.push('/')
    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);

    // axiosInstance.post("/token/", formData).then((res) => {
    //   localStorage.setItem("access_token", res.data.access);
    //   localStorage.setItem("refresh_token", res.data.refresh);
    //   localStorage.setItem("userInfo", JSON.stringify(formData));
    //   axiosInstance.defaults.headers["Authorization"] =
    //     "JWT " + localStorage.getItem("access_token");
    //   history.push("/");
    // });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
