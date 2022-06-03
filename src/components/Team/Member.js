import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const TeamMember = ({ member }) => {
  const { img, name, position, fb, twitter, instagram } = member;
  return (
    <div className="team-card col l6 m12 s12">
      <div className="team-member">
        <img
          src={img}
          alt="test team member"
          width={200}
          className="responsive-img circle"
        />
      </div>
      <div className="member-profile">
        <h3>{name}</h3>
        <h4>{position}</h4>
        <div className="social-icons">
          <a href={fb}>
            <BsFacebook />
          </a>
          <a href={twitter}>
            <BsTwitter />
          </a>
          <a href={instagram}>
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
