import HeaderImage from '../HeaderImage'
import FeaturedArticles from '../FeaturedArticles'
import FeaturedTutorials from '../FeaturedTutorials'
import Email from '../Email'
import ListExampleIcon from '../ContactInfo';
import React from 'react'
import {Link} from "react-router-dom" 

function HomePage() {

  return (
    <div>
      
      <HeaderImage />

      <FeaturedArticles 
      title="Featured Articles"
      />

      <FeaturedTutorials
      title="Featured Tutorials"
      />

      <Email
      title="SIGN UP FOR OUR DAILY INSIDER"
      placeholder="Enter your Email!"
      button1="Subscribe"
      />

      <ListExampleIcon />

    </div>
  );
}

export default HomePage;
