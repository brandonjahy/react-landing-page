/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/reset.css';
import Nav from'./components/Nav';
import Header from './components/Header'

const App = () => {
  
    return (
      <>
        {/* <Nav>
          <a herf='#' className='links' >About</a>
          <a herf='#' className='links'>Home</a>
          <a herf='#' className='links'>Contact</a>
        </Nav> */}
        <Header>
          <Nav>
            <a herf='#' className='links' >About</a>
            <a herf='#' className='links'>Home</a>
            <a herf='#' className='links'>Contact</a>
          </Nav>
          <div className="hero-block">
            <h1 className='title'>Follow the Road To the Unknown</h1>
          </div>
        </Header>
      </>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))