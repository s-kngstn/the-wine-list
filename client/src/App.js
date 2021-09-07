import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import SearchCard from "./components/SearchCard";
import Details from "./components/Details";
import "./App.css";

const App = () => {
  return (
    <div className="wrap">
      <Router>
        <header>
          <Link to="/">
            <Header />
          </Link>
        </header>
        <Switch>
          <Route path="/wine/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;