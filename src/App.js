import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfile } from "./firebase/firebase.utils";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

function App() {
  const [user, setUser] = useState({ currentUser: null });

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapShot) => {
          setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setUser({
        currentUser: user,
      });
      console.log(user);

      return () => unsubscribeFromAuth();
    });
  }, []);

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
