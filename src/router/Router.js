import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { DetailArticle } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/article" element={<DetailArticle />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router