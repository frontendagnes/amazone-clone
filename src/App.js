import React, { useEffect, Suspense } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { auth, onAuthStateChanged } from "./utility/firebase";
import { useStateValue } from "./utility/StateProvider";
//mui
import CircularProgress from "@mui/material/CircularProgress";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
//components
import Orders from "./components/Orders/Orders";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import NoMatch from "./components/NoMatch/NoMatch";
// const promise = loadStripe(
//   "pk_test_51J2CkpEyiy5eJg0JWnQ62NSdmKrhLlUS9SMT0cOdgBgClGL89oQYzGhLAdcPySjWFwcyy2kM1jXyfMWDoKaTsGDg00SUVqO2FX"
// );

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run one when the app components loads
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
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

  const renderLoader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <CircularProgress color="success" />
      <span
        style={{
          marginLeft: "10px",
          letterSpacing: "3px",
        }}
      >
        Loading...
      </span>
    </div>
  );

  return (
    <div className="app">
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
