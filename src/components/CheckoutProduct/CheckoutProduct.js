import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "../../utility/StateProvider";

function CheckoutProduct ({ id, img, title, price, rating, hideButton }){
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct"> 
             <img className="checkoutProduct__image" src={img} alt="" />
            <div className="checkoutProduct__info">
                <span className="checkoutProduct__title">{title}</span>
                <span className="checkoutProduct__price">
                    <small> PLN </small>
                    <strong>{price}</strong>
                </span>
                <span className="checkoutProduct__raiting">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                ))}
                </span>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Usuń z koszyka</button>
                )}               
            </div> 
        </div>
    )
}

export default CheckoutProduct
