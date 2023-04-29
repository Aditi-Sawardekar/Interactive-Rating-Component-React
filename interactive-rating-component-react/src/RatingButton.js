import React from 'react'

const RatingButton = ({number, setRating}) => {
    const handleGetRating = (event)=>{
        event.preventDefault();
        console.log("Get Rating")
        setRating(number)
        //setRating()
    }

    return (
        <button className="rating-button" onClick={handleGetRating}>{number}</button>
      )
}

export default RatingButton