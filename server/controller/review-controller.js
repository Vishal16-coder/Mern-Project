import Review from '../model/review.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Token from '../model/token.js'
dotenv.config();

export const postReview = async (request, response) => {
    try {
      // Extract data from the request body
    //   const { breweryName, breweryCity, breweryStreet, rating, description } = req.body;
      console.log(request.body);
      const review = { name: request.body.name, city: request.body.city, street: request.body.street,
        rating: request.body.rating,  description: request.body.description
    }
      const newReview=new Review(review);
      await newReview.save();
      return response.status(201).json({ msg: 'Review posted successfully' });
    } catch (error) {
      console.error('Error while posting review:', error);
      return response.status(500).json({ msg: 'Error while posting review' });
    }
  };
  