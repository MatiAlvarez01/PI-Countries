import './App.css';
import "./Fonts.css";
import { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getActivities, getCountries } from "../src/actions/index";
import Landing from './components/Landing/Landing';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Countries from './components/Countries/Countries';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [])

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
          <CountryDetails />
        </Route>
        <Route exact path="/newActivity">
          <CreateActivity />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
