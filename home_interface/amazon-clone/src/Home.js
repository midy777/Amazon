import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
     <div className='home__container'>
        <img className='home__image' 
        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"/>
       
        <div className='home__row'>
            <Product id="123557776" title='Kindle Paperwhite Essentials Bundle including Kindle Paperwhite - Wifi, Without Ads, Amazon Leather Cover, and Power Adapter'
            price={199.97} image='https://m.media-amazon.com/images/I/610LUQ0+QRL._AC_UY327_FMwebp_QL65_.jpg'
            rating={5}/>
            <Product id="245596903" title='Apple iMac ME088LL/A Intel Core i5-4570 X4 3.2GHz 16GB 1TB 27in, Silver (Renewed)'
            price={899.99} image='https://m.media-amazon.com/images/I/71UB8dVBl2L._AC_UY327_FMwebp_QL65_.jpg'
            rating={4} />
        </div>

        <div className='home__row'>
            <Product id="564474542" title='Echo Studio (Charcoal) with Amazon Smart Plug'
            price={224.98} image='https://m.media-amazon.com/images/I/61LPYsn+RYS._AC_UY327_FMwebp_QL65_.jpg'
            rating={5} />
            <Product id="344462696" title='Introducing Amazon Astro, Household Robot for Home Monitoring, with Alexa, Includes 6-month Free Trial of Ring Protect Pro'
            price={999.99} image='https://images-na.ssl-images-amazon.com/images/I/31IsB5w9TFL._AC_SX368_.jpg'
            rating={5} />
            <Product id="522365546" title='LEVOIT Air Purifiers for Home Large Room, H13 True HEPA Filter Removes 99.97% of Particles, Pet Allergies, Smoke, Dust, Auto Mode, Alexa Control'
            price={249.99} image='https://m.media-amazon.com/images/I/715r-rhEmNL._AC_UL480_QL65_.jpg'
            rating={5} />
        </div>

        <div className='home__row'>
            <Product id="789635235" title='Lenovo IdeaPad 3 Laptop, 14.0" FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 256GB Storage, AMD Radeon 7 Graphics, Windows 11 Home, Abyss Blue'
            price={429.99} image='https://m.media-amazon.com/images/I/71eLIuDmIgL._AC_UL480_FMwebp_QL65_.jpg'
            rating={5} />
        </div>
     </div>
    </div>
  );
}

export default Home;
