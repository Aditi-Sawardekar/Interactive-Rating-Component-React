import React, {useState} from "react";
import ThankYou from "./images/illustration-thank-you.svg";

const ThankyouComponent = ({rating}) => {
  return (
    <>
      <section className="thankyou-container">
        <img
          className="illustration-thank-you"
          src={ThankYou}
          alt="Thank you for feedback"
        />
        <h5 className="display-ratings">You selected {rating} out of 5</h5>

        <h2 className="thank-you">Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </section>
    </>
  );
};

export default ThankyouComponent;
