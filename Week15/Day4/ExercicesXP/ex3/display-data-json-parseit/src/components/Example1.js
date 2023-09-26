import React from 'react';
import data from '../data.json'; 

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Social Media</h1>
        <ul>
          {data.SocialMedias.map((socialMedia, index) => (
            <li key={index}>{socialMedia}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;