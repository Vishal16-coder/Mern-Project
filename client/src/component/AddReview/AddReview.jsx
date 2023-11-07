import React, { useState } from 'react';
import axios from 'axios';
function AddReview({ brewery, onAddReview }) {
  const [review, setReview] = useState({ rating: 1, description: '' });

  const handleRatingChange = (event) => {
    setReview({ ...review, rating: parseInt(event.target.value, 10) });
  };

  const handleDescriptionChange = (event) => {
    setReview({ ...review, description: event.target.value });
  };
const handleSubmit = async () => {
       
        const name = brewery.name;
        const city = brewery.city;
        const street =brewery.street;
        const dataToSend = {
          name,
          city,
          street,
          ...review,
        };

      const response = await axios.post('http://localhost:8000/post-review', dataToSend);
      if (response.status ===201) {
        setReview({ rating: 1, description: '' }); // Clear the form
      }
      else{
        console.log("false");
      }
  };

  return (
    <div>
      <h2>Add Review for {brewery.name}</h2>
      <div>
        <label>Rating:</label>
        <select value={review.rating} onChange={handleRatingChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={review.description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
}

export default AddReview;
