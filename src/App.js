import "./App.css";
import React from "react";
import HomeScreen from "./screens/home-screen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./screens/nav-bar";
import ArticleScreen from "./screens/article-screen";
import SubArticlesScreen from "./screens/subarticle-screen";
import ArticleEdit from "./screens/articleEdit-screen";
import SubArticleEdit from "./screens/subarticle-screen";
import Register from "./user/register";
import Login from "./user/login";
import Thanks from "./thanks";

function App() {
  return (
    <Router>
      <div className="App">
        {window.location.pathname === "/user/login" ? null : <NavBar />}
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/article" component={ArticleEdit} />
              <Route
                exact
                path="/article/edit/:slug"
                component={() => <ArticleEdit />}
              />
              <Route exact path="/article/:slug" component={ArticleScreen} />
              <Route exact path="/article/delete/:slug" component={ArticleScreen} />

              <Route exact path="/sub" component={SubArticleEdit} />
              <Route exact path="/sub/edit/:slug" component={SubArticleEdit} />
              <Route exact path="/sub/:slug" component={SubArticlesScreen} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/thanks" component={Thanks} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/logout" component={Thanks} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
