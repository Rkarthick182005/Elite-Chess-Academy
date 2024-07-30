import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <form>
        <textarea placeholder="Your feedback"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
