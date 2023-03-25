import React from 'react'
import './article_content.css'

const ArticleContent = ({ content }) => {

  const paragraphs = content.split('\n');

  return (
      <div className='shaan__detail_article'>
        <div className='shaan__detail_article-article_content'>
        {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}<br></br></p> 
        
        ))}
        </div>
    </div>
  )
}

export default ArticleContent