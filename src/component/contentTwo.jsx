import React from "react";

export default function MainContentTwo() {
    return (
      <>
        <div className="main-two">
          <div className="first-col">
            <p>The Bakery —</p>
            <br />
            <h4>
              Select breads and pastries <br /> are now available for pickup{" "}
              <br /> and delivery.
            </h4>
            <button>Order now</button>
          </div>
          <div className="second-col">
            <div className="item">
              <a href="#">
                <img src="image-asset (2).jpeg" alt="" />
              </a>
              <h3>Country Loaf</h3>
              <p>French Flour, Japanese Flour, Egg, Isigny Butter</p>
            </div>
            <div className="item">
              <a href="#">
                <img src="image-asset (3).jpeg" alt="" />
              </a>
              <h3>Cinnamon bun</h3>
              <p>French Flour, Egg, Isigny Butter, Cinnamon</p>
            </div>
          </div>
        </div>
        <div className="mainImg">
          <img
            className="main"
            src="1558-02i-Shot2_Bread_Floating_0145_PLATE-RGB.jpg"
            alt=""
          />
        </div>
      </>
    );
}