import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../utility/StateProvider";
import { getBasketTotal } from "../../utility/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();
    const handleClick = () => {
      if(!user || basket.length === 0){
        alert("Jesteś nie zalogowany lub masz pusty koszyk")
      } else{
        history.push('/payment')
      }
    }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Suma: ({basket.length} przedmiotów):
              <strong> {value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> To zamówienie zawiera prezent
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"PLN "}
      />
      <button onClick={handleClick}>Przejdź do kasy</button>
    </div>
  );
}

export default Subtotal;
