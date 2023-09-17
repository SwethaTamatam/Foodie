import React from 'react';
import User from './User';
import UserClass from './UserClass';

function About() {
  return (
    <div>
      <h1>Hello Everyone</h1>
      <h2>This is a food application</h2>
      <UserClass name = "XYZ" location = "Andhra Pradesh" contact="@swetha"/>
    </div>
  );
}

export default About;
