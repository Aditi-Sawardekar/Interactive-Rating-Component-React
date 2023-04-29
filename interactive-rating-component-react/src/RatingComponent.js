import React from "react";
import star from "./images/icon-star.svg";
import RatingButton from "./RatingButton";

const RatingComponent = ({ setSubmittedRaing, rating, setRating }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!rating){
        alert("Please select the rating!");
        return
    }
    setSubmittedRaing(true);
  };

  return (
    <>
      <section className="rating-container">
        <button className="star-button">
          <img
            className="star-symbol"
            src={star}
            alt="star symbol for rating"
          />
        </button>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        {/*<!--Collecting user input (ratings)-->*/}
        <form className="button-container">
          <div className="ratings-button-container">
            <RatingButton
              className="rating-button"
              number={1}
              setRating={setRating}
            />
            <RatingButton
              className="rating-button"
              number={2}
              setRating={setRating}
            />
            <RatingButton
              className="rating-button"
              number={3}
              setRating={setRating}
            />
            <RatingButton
              className="rating-button"
              number={4}
              setRating={setRating}
            />
            <RatingButton
              className="rating-button"
              number={5}
              setRating={setRating}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="submit-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default RatingComponent;
