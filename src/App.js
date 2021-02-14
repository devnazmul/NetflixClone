import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './myComp/HomePage/HomeScreen';
import LoginScreen from './myComp/LoginPage/LoginScreen';
import {auth} from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
// import { login, logout} from './features/u'


function App() {
  const user = null;

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const usSubscreibe = auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       // logged in
  //       console.log(userAuth);
  //       dispatch(login({
  //         uid: userAuth.uid,
  //         email: userAuth.email,
  //       }));
  //     } else {
  //       // logged out
  //       dispatch(logout);
  //     }
  //   });

  //   return usSubscreibe;
  // }, [])

  return (
    <div className="App">
      

      <Router>
{/* CHECK IF USER LOGGED IN */}
        {!user ? (
          <HomeScreen />
          // <LoginScreen />
        ) : (
            
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
            </Switch>
            
          )}
        
    </Router>

    </div>
  );
}

export default App;
