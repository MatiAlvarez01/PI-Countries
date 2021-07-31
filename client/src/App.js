import './App.css';
import "./Fonts.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Country from './components/Country/Country';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/countries">
          <Countries />
        </Route>
        <Route exact path="/country/:id">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
