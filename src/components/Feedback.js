import React from 'react';
import './Feedback.css';

const feedbacks = [
  {
    customer: 'Jenny Wilson',
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    rating: 5,
  },
  {
    customer: 'Dianne Russell',
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    rating: 5,
  },
  {
    customer: 'Devon Lane',
    comment: 'Amazing service, will be coming back! The waiters and waitresses are very attentive and friendly.',
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <div className="feedback">
      <h4>Customer's Feedback</h4>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-card">
          <p><strong>{feedback.customer}</strong></p>
          <p>{feedback.comment}</p>
          <div className="rating">
            {Array(feedback.rating).fill().map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feedback;