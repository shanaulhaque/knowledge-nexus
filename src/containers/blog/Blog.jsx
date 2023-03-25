import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../../components/article/Article';
import { blog01 } from './imports';
import formatDate from '../../utils/DateUtils';
import { getAllArticles } from '../../conn/firebase/firebaseAPI'

import './blog.css';



const Blog = () => {

  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    getAllArticles().then(data => {
      console.log(data);
      setArticles(data);
    })
  }, []);


 return(
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Discover new perspectives and insights</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
      {
          articles.map((article, key) => {
                return (<Article imgUrl={blog01} date={formatDate(article.publishedDate)} 
                title={article.title} articleId={article.id} key={key}/>);
          })
      }
      </div>
    </div>
  </div>
 )
 };

export default Blog;