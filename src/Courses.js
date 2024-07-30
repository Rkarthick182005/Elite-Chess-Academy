import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';


const Courses = () => {
  return (
    <div className="courses">
      <h2>Master Chess with Our Expert-Led Courses</h2>
      <p>
        Welcome to Elite Chess Academy! We provide a diverse range of courses tailored for players at every skill level. Whether you're just starting or looking to refine your strategies, our comprehensive training will help you elevate your game.
      </p>

      <div className="course-list">
        
        <div className="course-item">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.jOUVcRnc4luDYmVahYca4wHaFj&pid=Api&P=0&h=180"
            alt="Beginner Course"
            className="course-image"
          />
          <div className="course-content">
            <h3>Beginner Course</h3>
            <div className="course-stats">
              <span>
                <i className="fas fa-users" style={{ color: '#27ae60' }}></i>
                (7k+ Users)
              </span>
              <span>
                <i className="fas fa-star" style={{ color: '#f1c40f' }}></i>
                4.8 (5k+ Reviews)
              </span>
            </div>
            <p className="description">
              This course introduces you to the basics of chess, covering essential rules, piece movements, and fundamental strategies. 
            </p>
            <div className="course-components">
              <h4>Course Components:</h4>
              <ul>
                <li><strong>Video Lessons:</strong> 10 engaging lessons</li>
                <li><strong>Reading Materials:</strong> E-books and articles</li>
                <li><strong>Assignments:</strong> Practical exercises and puzzles</li>
                <li><strong>Quizzes:</strong> Assess your knowledge after each module</li>
              </ul>
            </div>
            <Link to="/plans" className="cta-button">Start Beginner Course</Link>
          </div>
        </div>

     
        <div className="course-item">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/16638.jpg"
            alt="Intermediate Course"
            className="course-image"
          />
          <div className="course-content">
            <h3>Intermediate Course</h3>
            <div className="course-stats">
              <span>
                <i className="fas fa-users" style={{ color: '#27ae60' }}></i>
               (4k+ Users)
              </span>
              <span>
                <i className="fas fa-star" style={{ color: '#f1c40f' }}></i>
                4.6 ( 2k+ Reviews)
              </span>
            </div>
            <p className="description">
              This course deepens your understanding of chess strategies and tactics, helping you to improve your gameplay.
            </p>
            <div className="course-components">
              <h4>Course Components:</h4>
              <ul>
                <li><strong>Video Lessons:</strong> 15 detailed lessons</li>
                <li><strong>Reading Materials:</strong> In-depth articles and strategy guides</li>
                <li><strong>Assignments:</strong> Challenging exercises and puzzles</li>
                <li><strong>Quizzes:</strong> Rigorous assessments after each module</li>
              </ul>
            </div>
            <Link to="/plans" className="cta-button">Start Intermediate Course</Link>
          </div>
        </div>

        
        <div className="course-item">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/16641.jpg"
            alt="Advanced Course"
            className="course-image"
          />
          <div className="course-content">
            <h3>Advanced Course</h3>
            <div className="course-stats">
              <span>
                <i className="fas fa-users" style={{ color: '#27ae60' }}></i>
                (5k+ Users)
              </span>
              <span>
                <i className="fas fa-star" style={{ color: '#f1c40f' }}></i>
                4.9 (4.5k+ Reviews)
              </span>
            </div>
            <p className="description">
              This course is designed for experienced players who want to refine their skills and learn advanced strategies.
            </p>
            <div className="course-components">
              <h4>Course Components:</h4>
              <ul className='li'>
                <li><strong>Video Lessons:</strong> 20 in-depth lessons</li>
                <li><strong>Reading Materials:</strong> Comprehensive texts and case studies</li>
                <li><strong>Assignments:</strong> Challenging exercises and positions</li>
                <li><strong>Quizzes:</strong> Rigorous assessments to gauge your progress</li>
              </ul>
            </div>
            <Link to="/plans" className="cta-button">Start Advanced Course</Link>
          </div>
        </div>
      </div>

     
      <div className="reviews">
        <h3>What Our Students Are Saying</h3>
        <div className="review-item">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="John Doe"
            className="review-avatar"
          />
          <div className="review-content">
            <h4>John Doe</h4>
            <div className="review-stats">
              <span>
                <i className="fas fa-star" style={{ color: '#f1c40f' }}></i>
                5.0
              </span>
            </div>
            <p className="review-text">
              "The Beginner Course was a fantastic introduction to chess. The lessons were clear and engaging, making it easy to learn the basics!"
            </p>
          </div>
        </div>
        <div className="review-item">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Jane Smith"
            className="review-avatar"
          />
          <div className="review-content">
            <h4>Jane Smith</h4>
            <div className="review-stats">
              <span>
                <i className="fas fa-star" style={{ color: '#f1c40f' }}></i>
                4.7
              </span>
            </div>
            <p className="review-text">
              "The Intermediate Course helped me improve my game significantly. I learned new strategies that I could immediately apply!"
            </p>
          </div>
        </div>
        <div className="review-item">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Bob Johnson"
            className="review-avatar"
          />
          <div className="review-content">
            <h4>Bob Johnson</h4>
            <div className="review-stats">
              <span>
                <i className="fas fa-star" style={{ color: '#f1c40f' }}></i>
                4.9
              </span>
            </div>
            <p className="review-text">
              "The Advanced Course was exactly what I needed to take my skills to the next level. The insights into advanced tactics were invaluable!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;