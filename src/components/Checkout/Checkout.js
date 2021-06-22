import React from "react";
import "./Checkout.css";
import Suptotal from "../Subtotal/Subtotal.js";
import { useStateValue } from "../../utility/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>{user && `Hello, ${user.email}`}</h3>
          <h2 className="checkout__title">
            Twój Koszyk {basket.length === 0 && <span>jest pusty</span>}
          </h2>

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
      <div className="checkout__right">
        <Suptotal />
      </div>
    </div>
  );
}

export default Checkout;
