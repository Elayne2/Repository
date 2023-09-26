import React from 'react';
import data from '../data.json'; 

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Experiences</h1>
        {data.Experiences.map(experience => (
          <div key={experience.id}>
            <h2>{experience.position}</h2>
            <p>Company: {experience.company}</p>
            <p>Duration: {experience.duration}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;