import React from 'react'
import './heading.css'
import formatDate from '../../utils/DateUtils';

const Heading = ({ title, publishedDate }) => {
  return (
    <div className="shaan__heading-container">
        <div className="shaan__heading-container-date">
            <p>{formatDate(publishedDate)}</p>
        </div>
        <div className="shaan__heading-container-title">
            <h1 className='gradient__text'>{title}</h1>
        </div>
  </div>
  )
}

export default Heading