import React from 'react'

import { Header, Footer, Blog} from './containers';
import { Navbar } from './components';
import './app.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <div>
            <Blog />
            <Footer />
        </div>
    </div>
  )
}

export default App