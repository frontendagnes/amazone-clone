import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../utility/firebase";
import { useStateValue } from "../../utility/StateProvider";
import Order from "../Order/Order";
import Login from "../Login/Login";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      {user ? (
        <>
          <h1>Twoje zamówienia</h1>
          <div className="order__order">
            {orders?.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p>Musisz być zalogowany żeby zobaczyć historię zamówień!</p>
          <Login />
        </>
      )}
    </div>
  );
}

export default Orders;
