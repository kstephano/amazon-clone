import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { auth } from "./firebase";

import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./redux/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER >>> ', authUser);

      if (authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
      </Switch>
     </div>
    </Router>
    
  );
}

export default App;
