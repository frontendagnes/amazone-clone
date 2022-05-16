import React, { useEffect, useState } from "react";
import "./Orders.css";
import {
  db,
  doc,
  onSnapshot,
  orderBy,
  collection,
  query,
} from "../../utility/firebase";
import { useStateValue } from "../../utility/StateProvider";
import Order from "../Order/Order";
import Login from "../Login/Login";
function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user?.uid);
      const ref = collection(docRef, "orders");
      const sortRef = query(ref, orderBy("created", "desc"));

      const unsuscribe = onSnapshot(sortRef, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            // timestamp: doc.data().created.toDate(),
          }))
        );
      });

      return () => {
        unsuscribe();
      };
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
