import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./utility/firebase";
import { useStateValue } from "./utility/StateProvider";
import Payment from "./components/Payment/Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";
import Footer from "./components/Footer/Footer";
// const promise = loadStripe(
//   "pk_test_51J2CkpEyiy5eJg0JWnQ62NSdmKrhLlUS9SMT0cOdgBgClGL89oQYzGhLAdcPySjWFwcyy2kM1jXyfMWDoKaTsGDg00SUVqO2FX"
// );

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run one when the app components loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        console.log(auth)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}>  */}
              <Payment />
            {/* </Elements> */}
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
