import React from 'react';

const TeamDetails = ({ team }) => {
  return (
    <div>
      <h4>Team Members</h4>
      <ul>
        {team.members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
      <h4>Contact Information</h4>
      <p>{team.contact}</p>
      {/* Render the apply button and handle application submission */}
    </div>
  );
};

export default TeamDetails;
