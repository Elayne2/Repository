import React from 'react';
import data from '../data.json';

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>
        <ul>
          {Object.keys(data.Skills).map((category, index) => (
            <div key={index}>
              <h3>{category}</h3>
              <ul>
                {data.Skills[category].map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;