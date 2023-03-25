import React from 'react'
import { useState, useEffect } from 'react';
import { Heading, Navbar } from '../../components'
import ArticleContent from '../../components/article/ArticleContent'
import { useLocation } from 'react-router-dom';
import { getArticleById } from '../../conn/firebase/firebaseAPI'
import './detail_article.css'

const articleDetail = {
    publishedDate: "published date",
    title: "Title",
    content: "content"
} 

const DetailArticle = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const articleId = params.get('articleId');
  console.log("article Id : " + articleId);

  const [ article, setArticle ] = useState(articleDetail);
  

  useEffect(() => {
    getArticleById(articleId).then(data => {
      console.log(data);
      setArticle(data);
    })
  }, {});

  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Heading title={article.title} date={article.publishedDate}/>
            <ArticleContent content={article.content} />
        </div>
    </div>
  )
}

export default DetailArticle