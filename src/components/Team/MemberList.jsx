import React from 'react';
import TeamMember from './Member';

const MemberList = ({ members }) => {
  return (
    <>
      {members.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </>
  );
};

export default MemberList;
