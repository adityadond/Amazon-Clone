
import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
         { /*prodct1*/}
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Steelbird Whif Full Face Helmet In Matte finish (Large 600 mm, Black and Green with Plain Visor)"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81H70vLkJaL._SL1500_.jpg"
          />
        </div>

        
       
        <div className="home__row">
          <Product
            id="99999928"
            title="OPPO F19 Pro+ 5G (Space Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={50}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71uXmoBZpOL._SL1500_.jpg"
          />
          <Product
            id="88888885"
            title="Noise ColorFit Ultra Smartwatch with 1.75. HD TruView Display, 60 Sports Modes, SpO2, Heart Rate, Stress, REM & Sleep Monitor, Calls & SMS Quick Reply, Stock Market Info (Space Blue)"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/417A7uqUaaS.jpg"
          />
          <Product
            id="55555551"
            title="HP All-in-One 24-df0215in 23.8-Inch FHD with Alexa Built-in (AMD Ryzen 3-3250U/8GB/256GB SSD + 1TB HDD/Win 10/MS Office 2019/Jet Black)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71MW1E0je-L._SL1200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12356985"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

