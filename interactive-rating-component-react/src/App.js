import React, { useState } from "react";
//import { Link } from "react-router-dom";

// Import Components
import RatingComponent from "./RatingComponent";
import ThankyouComponent from "./ThankyouComponent";

function App() {
  /* State of submittedRating is false,
    Make sure you use boolean for false and not string
    When submit button is clicked, 
    make it true.
    Set condition for thankyou component,
    When submmitedRating is true, it should be visible */

  const [submittedRating, setSubmittedRaing] = useState(false);
  const [rating, setRating] = useState("");

  return (
    <>
      <div className="App">
        {!submittedRating && (
          <RatingComponent 
          setSubmittedRaing={setSubmittedRaing}
          rating={rating}
          setRating={setRating}
          />
        )}

        {submittedRating && (
          <ThankyouComponent 
          setSubmittedRaing={setSubmittedRaing}
          rating={rating}
          />
        )}
      </div>

      {/* Method2: Using Links */}
    </>
  );
}

export default App;
