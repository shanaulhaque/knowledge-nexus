import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Expand your horizons with us</h1>
      <p>Explore and expand your knowledge with our comprehensive general knowledge website. Our mission is to provide accurate and up-to-date information on a variety of topics. We works to bring you the latest information for students, curious learners and everyone who wants to broaden their perspective.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Subscribe</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Header