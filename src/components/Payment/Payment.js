import React from "react";
import { useStateValue } from "../../utility/StateProvider";
import "./Payment.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../utility/reducer";
import CurrencyFormat from "react-currency-format";
// import axios from "../../utility/axios";
import { db } from "../../utility/firebase";
import FlipMove from "react-flip-move";
import firebase from "firebase";
import ID from "../../utility/uniqueID";
// import moment from "moment";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useNavigate();

  // const stripe = useStripe();
  // const elements = useElements();

  // const [succeeded, setSucceeded] = useState(false);
  // const [processing, setProcessing] = useState("");
  // const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);
  // const [clientSecret, setClientSecret] = useState(true);

  // useEffect(() => {
  //   //generate the special stripe secret which allows us to charge a costumer
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       // Stirpe expects the total in a currencies subunits
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);
  // console.log("the secret iss >>>", clientSecret);

  // tylko fron-end
  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("users")
      .doc(user?.uid) // id
      .collection("orders")
      .doc(ID())
      .set({
        basket: basket,
        amount: getBasketTotal(basket),
        created: firebase.firestore.FieldValue.serverTimestamp(),
      });
    dispatch({
      type: "EMPTY_BASKET",
    });

    history("/orders");
  };

  // dla full-stack
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // setProcessing(true);

  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       //paymentIntent = peyment confirmation

  //       db.collection("users")
  //         .doc(user?.uid) // id
  //         .collection("orders")
  //         .doc(paymentIntent.id)
  //         .set({
  //           basket: basket,
  //           amount: paymentIntent.amount,
  //           created: paymentIntent.created,
  //         });

  //       // setSucceeded(true);
  //       // setError(null);
  //       // setProcessing(false);

  //       dispatch({
  //         type: "EMPTY_BASKET",
  //       });

  //       history.replace("/orders");
  //     });
  // };

  // const handleChange = (event) => {
  //   // Listen for change in the CardElement
  //   // and display any errors as the cosumer types thier card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          W koszyku (<Link to="/checkout">{basket?.length} przedmity</Link>)
        </h1>
        {/* Payment section - delivery adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Adres dostawy</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>123 React Street</p>
            <p>Jelonka, Polska</p>
          </div>
        </div>
        {/* Payment section - Review adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Przedmity w koszyku</h3>
          </div>
          <div className="payment__items">
            {basket.length === 0 && <h4>Twój koszyk jest pusty</h4>}
            <ul>
              <FlipMove leaveAnimation>
                {basket.map((item) => (
                  <li key={item.id}>
                    <CheckoutProduct
                      id={item.id}
                      img={item.img}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                    />
                  </li>
                ))}
              </FlipMove>
            </ul>
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Metody Płatności</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              {/* <CardElement onChange={handleChange} /> */}
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Suma zamówienia: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"PLN "}
                />
                {/* <button disabled={processing || disabled || succeeded}> */}
                <button disabled={basket.length === 0 ? true : false}>
                  {/* <span>{processing ? <p>Processing</p> : "Buy Now"}</span> */}
                  Kup Teraz
                </button>
                <p>To nie jest prawdziwy sklep, towary nie zostaną wysłane a po wybraniu przycisku Kup Teraz nie trzeba realizować płatności.</p>
              </div>
              {/* Error */}
              {/* {error && <div>{error}</div>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
