import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../utility/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.massage));
  };
  const register = (e) => {
    e.preventDefault();
    //firabase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Auth >>>", auth)
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.massage));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="login__signInButton">
            Zaloguj się
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice. <br /> <br />
          To jest FAKE Clone wersja pokazowa nie realizuję zamówień a wszystkie podane dane są chronione.
        </p>
        <button onClick={register} className="login__registerButton">
          Załóż konto
        </button>
      </div>
    </div>
  );
}

export default Login;
