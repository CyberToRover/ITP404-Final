import React, { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  NavLink,
} from "react-router-dom";
import NoMatch from './NoMatch';
import { DataStoreContext } from "./contexts";
import Signup from './Signup';
import Login from './Login';
import Navigation from './Navigation';
import { fetchUser } from "./auth";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((user) => {
      setUser(user);
    });
  }, []);


  return (
    <DataStoreContext.Provider
      value={{user, setUser }}
    >
      <Router>
      <div className="App">
      <Header />
      {/* <Link to="/">Home (Reset)</Link> */}
      {/* <NavLink to="/" activeStyle={{fontWeight: "bold", color: "blue"}}>Home</NavLink> */}
      <Navigation />
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/starlink" />
        </Route>
        <Route path="/starlink/*" exact={true}>
          <Redirect to="/starlink" />
        </Route>
        <Route path="/starlink">
          <Main />
        </Route>
        <Route path="/signup" exact={true}>
          <Signup />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
    </DataStoreContext.Provider>
    
  );
}

export default App;
