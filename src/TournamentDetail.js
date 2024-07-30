import React from 'react';
import './TournamentDetail.css';

const TournamentDetail = ({ match }) => {
  return (
    <div className="tournament-detail">
      <h2>Tournament Detail - {match.params.id}</h2>
      <p>Tournament content and details will be displayed here.</p>
    </div>
  );
};

export default TournamentDetail;
