import React from 'react'
import {useNavigation } from 'react-router-dom';

function About ({authurized}) {

const Navigate = useNavigation();

    if (!authurized) {
      return <Navigate to="/login" />
    }

  return (
    <div>
        <h1>About Page</h1>
    </div>
  )
}

export default About;