import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Elite Chess Academy</h1>
        <p>At Elite Chess Academy, we are passionate about nurturing chess talent and fostering strategic thinking. Discover our story and what sets us apart.</p>
      </header>
      
      <section className="about-details">
        <img src="https://tse1.mm.bing.net/th?id=OIP.UURMEL9skgnbADhGL6SmZAHaEo&pid=Api&P=0&h=180" alt="About Us" className="about-image"/>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2010, Elite Chess Academy began with a mission to make chess accessible to everyone. From our humble beginnings, we've grown into a renowned institution with a global presence. Our commitment to excellence and innovation in chess education has set new standards in the field.</p>
          <h2>Our Mission</h2>
          <p>Our mission is to cultivate a love for chess in players of all ages and skill levels. We provide a dynamic learning environment where strategic thinking and critical analysis are at the forefront of our teaching methodology. We strive to empower our students with the skills to excel both on and off the chessboard.</p>
          <h2>Our Vision</h2>
          <p>We envision a world where chess is a universal language that connects minds and fosters intellectual growth. Our goal is to be a global leader in chess education, inspiring a new generation of chess enthusiasts and champions through our innovative programs and world-class coaching.</p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We maintain the highest ethical standards in our coaching and interactions with students.</li>
            <li><strong>Excellence:</strong> We strive for excellence in every aspect of our academy, from curriculum development to coaching.</li>
            <li><strong>Inclusivity:</strong> We welcome and support players from all backgrounds and skill levels.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and technologies to enhance our teaching methods and student experience.</li>
          </ul>
        </div>
      </section>
      
      <section className="about-impact">
        <h2>Impact Stories</h2>
        <div className="impact-list">
          <div className="impact-item">
            <h3>Community Outreach</h3>
            <p>We actively engage with local communities through chess workshops and tournaments, bringing the joy of chess to schools and youth organizations.</p>
          </div>
          <div className="impact-item">
            <h3>Champion Development</h3>
            <p>Our academy has produced numerous national and international champions who have made their mark on the global chess stage.</p>
          </div>
          <div className="impact-item">
            <h3>Research and Innovation</h3>
            <p>We invest in research to advance chess education methodologies and develop tools that enhance learning and gameplay.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
