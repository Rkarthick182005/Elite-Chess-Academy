import React from 'react';
import './Home.css'; 
import '@fontsource/montserrat'



const Home = () => {
  
  return (
    <>

      <div className="home">
        <header className="home-header">
          <img 
            src="https://media.istockphoto.com/id/1589828270/photo/victory-white-king-lies-defeated-at-foot-of-winning-black-queen.webp?b=1&s=170667a&w=0&k=20&c=84ATVKZ-OB7fFHs8Tmvo2IfnCVvp91GCZHpQ5dohymc=" 
            alt="Chess Mastery" 
            className="home-image" 
          />
          <div className="header-content">
            <h1 className="welcome-text">Welcome to Elite Chess Academy</h1>
            <p>Elevate your chess game with world-class training and join a vibrant community of chess enthusiasts.</p>
            <a href="/courses" className="cta-button">Explore Our Courses</a>
          </div>
        </header>

        <section className="home-highlight">
          <h2>Why Choose Elite Chess Academy?</h2>
          <div className="home-content">
            <p>At Elite Chess Academy, we are committed to fostering chess talent through a unique blend of time-honored techniques and cutting-edge strategies. Our programs are tailored to cater to every skill level, ensuring each participant reaches their full potential.</p>
            <ul>
              <li><strong>World-Class Coaches:</strong> Learn from international chess masters and renowned strategists.</li>
              <li><strong>Personalized Learning Paths:</strong> Customized training plans based on individual assessments.</li>
              <li><strong>Dynamic Workshops:</strong> Hands-on workshops simulating real-game scenarios.</li>
              <li><strong>Global Tournaments:</strong> Compete in prestigious international tournaments.</li>
              <li><strong>Vibrant Community:</strong> Network with fellow players and participate in exclusive events.</li>
            </ul>
          </div>
        </section>

        <section className="home-success">
  <h1><strong>Success Stories</strong></h1>
  <div className="success-stories">
    <div className="story">
      <h3>
        John Doe
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star-half-alt" style={{ color: '#ffcc00' }} />
      </h3>
      <p>"Joining Elite Chess Academy was a game-changer for me. The personalized coaching and strategic insights helped me win my first regional tournament and set new personal records."</p>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>
          <i className="fas fa-trophy" style={{ color: '#ffcc00' }} />
          Regional Tournament Winner
        </li>
        <li>
          <i className="fas fa-chess-king" style={{ color: '#ffcc00' }} />
          Top 10 in National Chess Rankings
        </li>
      </ul>
    </div>
    <div className="story">
      <h3>
        Jane Smith
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
      </h3>
      <p>"The Academy's approach to personalized coaching and dynamic workshops has been incredible. Within a year, I transitioned from a casual player to a nationally ranked competitor."</p>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>
          <i className="fas fa-chess-knight" style={{ color: '#ffcc00' }} />
          Nationally Ranked Chess Competitor
        </li>
        <li>
          <i className="fas fa-trophy" style={{ color: '#ffcc00' }} />
          Winner of Several Local Tournaments
        </li>
      </ul>
    </div>
  </div>
  <div className="success-stories">
    <div className="story">
      <h3>
        Michael Johnson
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
      </h3>
      <p>"Elite Chess Academy has been instrumental in my chess journey. The coaches' expertise and the supportive community have helped me achieve my goals and continuously improve my game."</p>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>
          <i className="fas fa-chess-king" style={{ color: '#ffcc00' }} />
          International Chess Master Title
        </li>
        <li>
          <i className="fas fa-trophy" style={{ color: '#ffcc00' }} />
          Winner of Multiple International Tournaments
        </li>
      </ul>
    </div>
    <div className="story">
      <h3>
        Emily Chen
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
        <i className="fas fa-star" style={{ color: '#ffcc00' }} />
      </h3>
      <p>"The training programs at Elite Chess Academy are exceptional. The combination of theory, practical workshops, and personalized feedback has been invaluable in my chess development."</p>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>
          <i className="fas fa-chess-queen" style={{ color: '#ffcc00' }} />
          Women's International Master Title
        </li>
        <li>
          <i className="fas fa-globe" style={{ color: '#ffcc00' }} />
          Represented Country in Chess Olympiad
        </li>
      </ul>
    </div>
  </div>
</section>
        <section className="home-contact">
          <h1><strong>Get in Touch</strong></h1>
          <p>Have questions or want to learn more about our programs? Our team is here to assist you. Feel free to reach out to us through the following channels:</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email Us</h3>
              <p>Email: <a href="mailto:info@elitechessacademy.com">info@elitechessacademy.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Call Us</h3>
              <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
            <div className="contact-item">
              <h3>Follow Us</h3>
              <p>Stay updated with our latest news and events on social media:</p>
              <div className="social-links">
                <a href="https://facebook.com/elitechessacademy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/elitechessacademy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/elitechessacademy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="home-footer">
          <p>&copy; 2023 Elite Chess Academy. All rights reserved.</p>
          <p>Ready to elevate your chess skills? <a href="/courses">Explore our courses</a> or <a href="/contact">get in touch with us</a> to start your journey!</p>
        </footer>
      </div>
    </>
  );
};

export default Home;