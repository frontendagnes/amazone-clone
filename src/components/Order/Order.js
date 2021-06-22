import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  let date = new Date()
  let year = date.getFullYear()
  
  return (
    <div className="order">
      <h2>Zamówienie</h2>
      <p>{moment.unix(order.data.created).format(`MMMM Do ${year} h:mma`)}</p>
      <p className="order__id">
       <small>{order.id}</small> 
      </p>
      {order.data.basket?.map( item => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
         <CurrencyFormat
            renderText={(value) => (
            <>
                <h3 className="order__total"> Suma Zamówienia: {value}</h3>
            </>
            )}
            decimalScale={2}
            value={order.data.amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"PLN "}
      />
    </div>
  );
}

export default Order;
