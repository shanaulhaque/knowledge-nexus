import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';

const Article = ({ imgUrl, date, title, articleId }) => (
  
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
        <nav>
          <Link to={{ pathname: '/article', search: '?articleId='+articleId }}><p>Read Full Article</p></Link>
        </nav>
    </div>
  </div>
);

export default Article;