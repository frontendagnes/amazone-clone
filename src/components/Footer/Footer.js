import React from "react";
import "./Footer.css";
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__collumn">
          <ul>
            <li>O nas</li>
            <li>Informacje korporacyjne</li>
            <li>Praca</li>
            <li>Informacje prasowa</li>
          </ul>
        </div>
        <div className="footer__collumn">
          <ul>
            <li>Zarabiaj z nami</li>
            <li>Sprzedawaj w Store</li>
            <li>Realizacja przez Store</li>
            <li>Program partnerski</li>
            <li>Wydawaj z nami niezależne publikacje</li>
          </ul>
        </div>
        <div className="footer__collumn">
          <ul>
            <li>Metody płatności</li>
            <li>Metody płatności</li>
            <li>Przelewy24</li>
            <li>Karty podarunkowe</li>
          </ul>
        </div>
        <div className="footer__collumn">
          <ul>
            <li>Obserwuj nas</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footer__collumn">
          <ul>
            <li>Śledź przesyłki lub wyświetl zamówienia</li>
            <li>Koszty i zasady dostaw</li>
            <li>Zwroty i wymiana</li>
            <li>Recykling</li>
            <li>Aplikacja Store</li>
            <li>Dział Obsługi Klienta</li>
          </ul>
        </div>
      </div>
      {/* <img className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
      <div className="footer__logo">
        <p>Store</p>
        <CallMissedOutgoingIcon style={{color: "#f49934", fontSize: 42}}/>
      </div>
    </div>
  );
}

export default Footer;
