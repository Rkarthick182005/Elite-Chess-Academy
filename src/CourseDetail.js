import React from 'react';
import './CourseDetail.css';

const CourseDetail = ({ match }) => {
  return (
    <div className="course-detail">
      <h2>Course Detail - {match.params.id}</h2>
      <p>Course content and details will be displayed here.</p>
    </div>
  );
};

export default CourseDetail;
