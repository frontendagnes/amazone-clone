import React from "react";
import { useStateValue } from "../../utility/StateProvider";
import "./Product.css";
function Product({ id, title, img, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispach the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>PLN </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Dodaj do koszyka</button>
    </div>
  );
}

export default Product;
