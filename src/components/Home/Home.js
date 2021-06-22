import React from "react";
import "./Home.css";
import "../Product/Product.js";
import Product from "../Product/Product.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const slickSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: true,
    dots: true,
    arrows: false
  };
  return (
    <div className="home">
      <div className="home__container">
        <Slider {...slickSettings} className="home__slider">
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/48/PL-hq/2021/img/X_Site/XCM_Manual_1331217_1703607_PL_pl_gw_pc_tallhero_2x_3885350_1500x600_2X._CB667923728_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/48/PL-hq/2021/img/Consumer_Electronics/XCM_Manual_ORIGIN_1329755_1694824_PL_pl_ce_june_3857960_1500x600_1X_pl_PL._CB668328192_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/48/PL-hq/2021/img/Sports/XCM_Manual_1331292_1703938_PL_pl_gw_pc_tallhero_2x_pl_pl_3862186_1500x600_1X_pl_PL._CB668677779_.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="home__row">
        <Product
          id="12331341"
          title="Philips Hue Play White and Color Ambiance Zestaw, 2x podłużna lampa, czarna, 16 mln kolorów, możliwość przyciemniania, sterowanie aplikacją"
          price={11.96}
          img="https://images-na.ssl-images-amazon.com/images/I/71ITEaodrZL._AC_SL1500_.jpg"
          rating={5}
        />
        <Product
          id="49538094"
          title="Kodak Kamera PIXPRO FZ152 - czarna (16 MP 15 x zoom 24 mm szeroki obiektyw OIS HD)"
          price={239}
          img="https://images-na.ssl-images-amazon.com/images/I/71EzZHveM-L._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="58538194"
          title="DeLonghi EC201CD.B Espresso [Klasa energetyczna A]"
          price={199.99}
          img="https://images-na.ssl-images-amazon.com/images/I/51eqU4jOrLL._AC_SL1199_.jpg"
          rating={3}
        />
        <Product
          id="49238395"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          rating={5}
        />
        <Product
          id="16538799"
          title="Dickie 203723004 Construction Wywrotka Volvo Ze Światłem I Dźwiękiem 203723004 ,żółty / szary"
          price={598}
          img="https://images-na.ssl-images-amazon.com/images/I/71e7WRVuoyL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="99537795"
          title="Philips 43PUS7304/12 TvAmbilight 43 Telewizor Smart TV (4K, LED TV, HDR 10+, Android TV, Google Assistant, Kompatybilny z Alexą, Dolby Atmos)"
          price={1094.99}
          img="https://images-na.ssl-images-amazon.com/images/I/71e0LNY9YeL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
