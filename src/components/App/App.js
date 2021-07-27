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
import userContext from "../../context/userContext";
import userReducer from "../../reducers/userReducer";
import { useReducer } from "react";
import ManageUsers from "../ManageUsers/ManageUsers";
import UsersGrid from "../UsersGrid/UsersGrid";
import Account from "../Account/Account";
import ManageMovies from "../ManageMovies/ManageMovies";
import { Container } from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";
import MovieSettings from "../MovieSettings/MovieSettings";
import ManageActors from "../ManageActors/ManageActors";
import AddActor from "../AddActor/AddActor";
import ActorSettings from "../ActorSettings/ActorSettings";

function App() {
  const [user, userDispatch] = useReducer(userReducer, null);
  return (
    <div className="App">
      <Router>
        <userContext.Provider value={{ user, userDispatch }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MoviesGrid} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/actors" component={ActorsGrid} />
            <Route path="/directors" component={DirectorsGrid} />
            <Route path="/account" component={Account} />
            <Route path="/movie-details/:slug" component={MovieDetailsCard} />
            <Route
              path="/director-details/:slug"
              component={DirectorDetailsCard}
            />
            <Route path="/actor-details/:slug" component={ActorDetailsCard} />
            <Route path="/manage-users" component={UsersGrid} />
            <Route path="/user-settings/:slug" component={ManageUsers} />
            <Route path="/manage-movies" component={ManageMovies} />
            <Route path="/add-movie" component={AddMovie} />
            <Route path="/movie-settings/:slug" component={MovieSettings} />
            <Route path="/manage-actors" component={ManageActors} />
            <Route path="/add-actor" component={AddActor} />
            <Route path="/actor-settings/:slug" component={ActorSettings} />
          </Switch>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
