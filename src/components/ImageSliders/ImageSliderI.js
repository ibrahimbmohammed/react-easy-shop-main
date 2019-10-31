import React from "react";
import ReactSwipe from "react-swipe";
import pic1 from "../../images/lacenobackblue - Copy.png";
import pic2 from "../../images/Layer 8 - Copy.png";
import pic3 from "../../images/Layer 91.png";
const Carousel = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          {" "}
          <img src={pic3} />
        </div>
        <div>
          <img src={pic2} />
        </div>
        <div>
          <img src={pic1} />
        </div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};
export default Carousel;
