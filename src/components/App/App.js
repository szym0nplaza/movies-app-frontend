import "./App.css";
import Navbar from "../NavbarPanel/NavbarPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import DirectorsGrid from "../DirectorsGrid/DirectorsGrid";
import ActorsGrid from "../ActorsGrid/ActorsGrid";
import MovieDetailsCard from "../MovieDetailsCard/MovieDetailsCard";
import DirectorDetailsCard from "../DirectorDetailsCard/DirectorDetailsCard";
import ActorDetailsCard from "../ActorDetailsCard/ActorDetailsCard";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MoviesGrid} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/actors" component={ActorsGrid} />
          <Route path="/directors" component={DirectorsGrid} />
          <Route path="/movie-details/:slug" component={MovieDetailsCard} />
          <Route
            path="/director-details/:slug"
            component={DirectorDetailsCard}
          />
          <Route path="/actor-details/:slug" component={ActorDetailsCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
