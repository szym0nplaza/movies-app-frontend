import "./App.css";
import Navbar from "../NavbarPanel/NavbarPanel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/actors" />
          <Route path="/directors" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
