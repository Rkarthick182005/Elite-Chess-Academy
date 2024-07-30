import React, { useState } from 'react';
import './Tournaments.css';

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState(null);

  const handleWinnerClick = (winner) => {
    setSelectedWinner(winner);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWinner(null);
  };

  const winners = [
    {
      name: 'Alice Johnson',
      tournament: 'Spring Championship',
      image: 'https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&rs=1&c=1&qlt=95&w=106&h=106',
      details: `Alice Johnson is a rising star in the chess world, known for her aggressive playing style and quick thinking. 
      She has been training at Elite Chess Academy for the past two years and has shown remarkable progress.`,
    },
    {
      name: 'Ryan Gosling',
      tournament: 'Summer Blitz',
      image: 'https://tse2.mm.bing.net/th?id=OIP.hJxQSQghmv6dhKdcEr-KzQHaFA&pid=Api&P=0&h=180',
      details: `Ryan Gosling is a veteran player who has been competing in tournaments for over a decade. 
      His experience(I Drive) and strategic thinking have made him a formidable opponent.`,
    },
    {
      name: 'Charlie D Brown',
      tournament: 'Fall Open',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Vpn7LMOdE20pRXf1YPMnJgAAAA&pid=Api&P=0&h=180',
      details: `Charlie D Brown is a dedicated player with the will of "D" who has been putting in countless hours of practice. 
      His hard work and determination have paid off, as he has been consistently placing in the top positions in recent tournaments.`,
    },
    {
      name: 'Alexandria Dadoria ',
      tournament: 'Winter Cup',
      image: 'https://tse4.explicit.bing.net/th?id=OIP.byCAsuWQ2U0NTWsAx5iQswHaEo&pid=Api&P=0&h=180',
      details: `Alexandria Dadoria is a versatile player who can adapt to any situation on the board. 
      Her ability to read her opponent's moves and plan several moves ahead has made her a force to be reckoned with.`,
    },
    {
      name: 'Ethan Ayano',
      tournament: 'City Championship',
      image: 'https://tse4.mm.bing.net/th?id=OIP.qyy8u8BpGMIEGFCiUIJ8egHaGH&pid=Api&P=0&h=180',
      details: `Ethan Ayano is a young prodigy who has been making waves in the local chess scene. 
      According to him"Humans nothing But Tools"
      His quick thinking and sharp tactical skills have earned him the respect of his peers.`,
    }
  ];

  return (
    <div className="tournaments-container">
    
      <div className="tournaments-grid">
       
        <div className="tournament-card online-tournament">
          <h3 className='tf'>Online Tournaments</h3>
          <img 
            src="https://4kwallpapers.com/images/walls/thumbs/16663.jpg" 
            alt="Online Tournament" 
            className="tournament-image" 
          />
          <p>Join our exciting online tournaments and compete against players from around the world. Earn points, climb the leaderboard, and win amazing prizes!</p>
          
          <div className="tournament-list">
            <h4><strong>Upcoming Online Tournaments:</strong></h4>
            <ul>
              <li>
                <strong>Spring Championship</strong> - Prize: $1,000 | Entry Fee: $10
                <a href="/online-tournaments/spring-championship" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>Summer Blitz</strong> - Prize: $500 | Entry Fee: $5
                <a href="/online-tournaments/summer-blitz" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>Fall Open</strong> - Prize: $750 | Entry Fee: $15
                <a href="/online-tournaments/fall-open" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>Winter Cup</strong> - Prize: $1,200 | Entry Fee: $20
                <a href="/online-tournaments/winter-cup" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>Monthly Arena</strong> - Prize: $300 | Entry Fee: Free
                <a href="/online-tournaments/monthly-arena" className="cta-button">Participate</a>
              </li>
            </ul>
          </div>
        </div>
        
        
        <div className="tournament-card offline-tournament">
          <h3 className='tf'>Offline Tournaments</h3>
          <img 
            src="https://4kwallpapers.com/images/walls/thumbs_2t/16674.jpg" 
            alt="Offline Tournament" 
            className="tournament-image" 
          />
          <p>Experience the thrill of over-the-board chess at our offline tournaments. Meet fellow players, learn from experts, and showcase your skills .</p>
          
          <div className="tournament-list">
            <h4><strong>Upcoming Offline Tournaments:</strong></h4>
            <ul>
              <li>
                <strong>City Championship</strong> - Prize: $500 | Entry Fee: $20
                <a href="/offline-tournaments/city-championship" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>State Open</strong> - Prize: $300 | Entry Fee: $15
                <a href="/offline-tournaments/state-open" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>Regional Qualifiers</strong> - Prize: $400 | Entry Fee: $25
                <a href="/offline-tournaments/regional-qualifiers" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>National Invitational</strong> - Prize: $1,000 | Entry Fee: $50
                <a href="/offline-tournaments/national-invitational" className="cta-button">Participate</a>
              </li>
              <li>
                <strong>Local Club Tournament</strong> - Prize: $200 | Entry Fee: $10
                <a href="/offline-tournaments/local-club" className="cta-button">Participate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="results-section">
        <h3>Results</h3>
        <p>Here are the winners from our academy's recent tournaments:</p>
        
        <div className="results-container">
          <div className="results-column">
            <h4><strong>Recent Tournament Winners:</strong></h4>
            <div className="results-list">
              {winners.slice(0, 3).map((winner, index) => (
                <div key={index} className="result-card" onClick={() => handleWinnerClick(winner)}>
                  <img 
                    src={winner.image} 
                    alt={winner.name} 
                    className="winner-image" 
                  />
                  <div className="winner-details">
                    <strong>{winner.name}</strong>
                    <p>{winner.tournament} - 1st Place</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="results-column">
            <h4><strong>More Recent Winners:</strong></h4>
            <div className="results-list">
              {winners.slice(3).map((winner, index) => (
                <div key={index} className="result-card" onClick={() => handleWinnerClick(winner)}>
                  <img 
                    src={winner.image} 
                    alt={winner.name} 
                    className="winner-image" 
                  />
                  <div className="winner-details">
                    <strong>{winner.name}</strong>
                    <p>{winner.tournament} - 1st Place</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img 
              src={selectedWinner.image} 
              alt={selectedWinner.name} 
              className="winner-image" 
            />
            <h3>{selectedWinner.name}</h3>
            <p>{selectedWinner.tournament} - 1st Place</p>
            <p>{selectedWinner.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tournaments;