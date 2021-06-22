import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
            <li>Sprzedawaj na Amazon</li>
            <li>Realizacja przez Amazon (FBA)</li>
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
            <li>Aplikacja Amazon</li>
            <li>Dział Obsługi Klienta</li>
          </ul>
        </div>
      </div>
      <img className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
    </div>
  );
}

export default Footer;
