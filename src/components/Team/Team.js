import React from 'react';
import members from '../../utils/team';
import MemberList from './MemberList';

const Team = ({ loader }) => {
  return (
    <div className="team" id="team">
      <h2>Our Amazing Team</h2>
      <div className="container">
        <div className="row">
          {loader ? (
            <div
              class="progress"
              style={{ background: '#f66f11', marginBottom: '40px' }}
            >
              <div class="indeterminate"></div>
            </div>
          ) : (
            <MemberList members={members} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
