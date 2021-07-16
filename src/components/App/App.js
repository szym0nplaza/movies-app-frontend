import "./App.css";
import Navbar from "../NavbarPanel/NavbarPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import DirectorsGrid from "../DirectorsGrid/DirectorsGrid";
import ActorsGrid from "../ActorsGrid/ActorsGrid";
import postData from "../../services/postData";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MoviesGrid} />
          <Route path="/actors" component={ActorsGrid} />
          <Route path="/directors" component={DirectorsGrid} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
