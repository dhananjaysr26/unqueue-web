import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import CreateQroom from "../components/CreateQroom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import About from "../components/About";
import Navbar from "../components/Navbar";
import PageNotFound from "../components/PageNotFound";
import { Footer } from "../components/Footer";
export default function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create-qroom" component={CreateQroom} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        {/* <Footer/> */}
      </Router>
    </>
  );
}