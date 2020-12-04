import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Components/Search";
import SingleMovie from "./Components/SingleMovie";

function Routes() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Search /> */}
        <Route  path="/" component={Search} />
        <Route   exact path="/movies" component={Search} />
        <Route exact path="/movies/:movieId" component={SingleMovie} />
      </div>
    </Router>
  );
}

export default Routes;
