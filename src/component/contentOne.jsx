import React from "react";

export default function MainContentOne() {
    return (
      <>
        <div className="main-one">
          <div className="first-col">
            <div className="img-cont">
              <img src="image-asset.jpeg" alt="" />
            </div>
          </div>
          <div className="second-col">
            <div className="txt-cont">
              <p>
                Our bread <br /> philosophy is <br /> balance.
              </p>
            </div>
            <div className="second-row-second-col">
              <div className="img">
                <img src="image-asset (1).jpeg" alt="" />
              </div>
              <div className="txt">
                <p>
                  Farm to Table — <br />
                  Bakery is a New York based bakery producing artisanal,
                  handmade breads & pastries using traditional baking
                  techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}