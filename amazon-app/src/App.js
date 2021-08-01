import Header from "./Header";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders"
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_live_51JJHTTSBBHV635Yu0dWcNpqvVCphrc38ja3b0r3XVgSBdj3LIl24QvavEduaz31Bkpnk1hKCG0JvgLTYa3o1rHmk004yeOz9Tt"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/Orders">
          <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe ={promise}>
            <Payment />
            </Elements>
          </Route>

          {/*Header*/}
          <Route path="/">
            <Header />
            <Home />
            

            {/*Home */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
