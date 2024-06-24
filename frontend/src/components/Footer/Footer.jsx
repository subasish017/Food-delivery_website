import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>At FlavorFind, we believe that great food brings people together. Founded with a passion for culinary excellence and a commitment to quality, our mission is to provide fresh, delicious meals that cater to every taste and preference. Whether you're in the mood for a hearty home-cooked dinner, a light and healthy lunch, or a decadent dessert, we've got you covered. Using only the finest ingredients, our talented chefs create a diverse menu that reflects both traditional flavors and innovative recipes. Join us in celebrating the joy of good food and exceptional service. Welcome to FlavorFind – where every meal is a masterpiece!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@flavorfind.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FlavorFind.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
