import "./App.css";
import React from "react";
import HomeScreen from "./screens/home-screen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./screens/nav-bar";
import ArticleScreen from "./components/article/article-screen";
import ArticleAdd from "./components/article/article-add";
import ArticleUpdate from "./components/article/article-update";
import SubArticleAdd from "./components/subarticle/subarticle-add";
import SubArticleUpdate from "./components/subarticle/subarticle-update";
import Register from "./user/register";
import Login from "./user/login";
import Thanks from "./thanks";

function App() {
  return (
    <Router>
        {window.location.pathname === "/user/login" ? null : <NavBar/>}
          <>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/article" component={ArticleAdd} />
              <Route
                exact
                path="/article/edit/:slug"
                component={ArticleUpdate}
              />
              <Route exact path="/article/:slug" component={ArticleScreen} />
              <Route exact path="/article/delete/:slug" component={ArticleScreen} />

              <Route exact path="/sub" component={SubArticleAdd} />
              <Route exact path="/sub/edit/:slug" component={SubArticleUpdate} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/thanks" component={Thanks} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/logout" component={Thanks} />
            </Switch>
          </>
    </Router>
  );
}

export default App;
