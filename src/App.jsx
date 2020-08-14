import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";

const App = () => {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Footer />
    </>
  );
};

const SpringApp = () => {
  return (
    <HashRouter>
      <Redirect from="/" to="/spring" />
      <Route path="/spring" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </HashRouter>
  );
};

export default SpringApp;
