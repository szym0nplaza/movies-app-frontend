import "./App.css";
import Navbar from "../NavbarPanel/NavbarPanel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import DirectorsGrid from "../DirectorsGrid/DirectorsGrid";
import ActorsGrid from "../ActorsGrid/ActorsGrid";

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
