import Header from "./Header.jsx";
import Nav from "./header/Nav.jsx";
import "../styles/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./projects/Projects.jsx";

const App = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>

    </Router>
  );
};

export default App;
