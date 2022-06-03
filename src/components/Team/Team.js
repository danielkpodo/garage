import React from 'react';
import members from '../../utils/team';
import MemberList from './MemberList';

const Team = () => {
  return (
    <div className="team" id="team">
      <h2>Our Amazing Team</h2>
      <div className="container">
        <div className="row">
          <MemberList members={members} />
        </div>
      </div>
    </div>
  );
};

export default Team;
