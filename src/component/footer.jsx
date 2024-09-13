import React from "react";

export default  function Footer() {
  return (
    <>
      <footer>
        <div className="col">
          <h3>Help &amp; Info</h3>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Delivery</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="col">
          <h3>Shop</h3>
          <a href="#">Mens</a>
          <a href="#">Womens</a>
          <a href="#">Kids</a>
          <a href="#">Wetsuits</a>
          <a href="#">Brands</a>
          <a href="#">Outlet</a>
          <a href="#">Store Locator</a>
        </div>
        <div className="col">
          <h3>Follow Us</h3>
        </div>
        <div className="col">
          <h3>Contact</h3>
          <a href="#">info@bhouse.com</a>
          <a href="#">010-1000-1234</a>
          <p>Mon to Fri 9am - 5pm GMT.</p>
          <p>
            Please check your spam folder <br />
            for email responses.
          </p>
        </div>
        <div className="col">
          <h1>Sign up</h1>
          <p>
            Sign up for 10% off your first order and keep up to <br /> date with
            all things British House
          </p>
          <input type="text" placeholder="Email address" />
        </div>
      </footer>
    </>
  );
}