import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="" />
                <div className="home__row">
                    <Product 
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/41+e3refnZL.jpg'
                        rating={5}
                    />
                    <Product
                        title='Alexa Speaker Build Amazon Clone w/ Full E-Commerce + Stripe using React JS for Beginners (Challenge Day 2) | Pt3'
                        price={29.99}
                        image='https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                <Product/>
                <Product/>
                <Product/>
                </div>
                <div className="home__row">
                <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
