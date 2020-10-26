import React, { useState } from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    let imgArray = [
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
    ]
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (imgArray.length - 1)) : setX(x+100);
    }

    const goRight = () => {
        x === -100 * (imgArray.length-1) ? setX(0) : setX(x-100);
    }

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__slider">
                    {imgArray.map((image =>(
                        <img 
                        className="home__image"
                        src={image} 
                        alt="" 
                        style={{transform: `translateX(${x}%)`}}    
                        />
                    )))}
                    <button id="goLeft" onClick={goLeft}>
                        &#12296;
                    </button>
                    <button id="goRight" onClick={goRight}>
                        &#12297;
                    </button>
                </div>
                <div className="home__row">
                    <Product 
                        id='12345'
                        title='Broadway Vita-Lip Clear Lip Gloss 0.47oz/14ml (5PCS Mint & Coconut & Rosehip & Mango Butter & Argan Oil) (5 PCS SET)'
                        price={5.79}
                        image='https://m.media-amazon.com/images/I/81TUgyu7-AL._AC_UL480_QL65_.jpg'
                        rating={5}
                    />
                    <Product
                        id='56789'
                        title='NYX PROFESSIONAL MAKEUP Matte Lipstick - Perfect Red, Bright Blue-Toned Red'
                        price={6.00}
                        image='https://m.media-amazon.com/images/I/51cx9tBNaRL._AC_UL480_QL65_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='567235'
                        title='CHANGEABLE Pro Eyeshadow Palette Matte Shimmer Make Up Eyeshadow Palette Pigmented Eye Shadow Powder Natural Colors Long Lasting Waterproof Makeup Pallet Halloween'
                        price={9.99}
                        image='https://m.media-amazon.com/images/I/61M7bKcMJvL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                    <Product
                        id='567789'
                        title='EYESEEK 64 Colors Eyeshadow Palette Professional High Pigmented Makeup Pallet Colorful Rainbow Color Makeup Eyeshadow Palette Matte Shimmer Glitter Eye Shadow'
                        price={13.99}
                        image='https://m.media-amazon.com/images/I/815dv6LN4vL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                    <Product 
                        id='56968'
                        title='Black Radiance True Complexion Contour Palette, Medium to Dark,'
                        price={6.66}
                        image='https://m.media-amazon.com/images/I/91gGhNQqmsL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='56789'
                        title='SHANY Gift Surprise - AMAZON EXCLUSIVE - All in One Makeup Bundle - Includes Pro Makeup Brush Set, Eyeshadow Palette,Makeup Set or Lipgloss Set and etc. - COLORS & SELECTION VARY'
                        price={59.95}
                        image='https://m.media-amazon.com/images/I/814O9M0BNOL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
