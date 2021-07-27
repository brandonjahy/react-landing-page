/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/reset.css';
import Nav from'./components/Nav';
import Header from './components/Header';
import About from './components/About';
import Card from './components/Card';

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
        <section className='part2'>
          <About>
            <div className='card-block'>
              <Card>
                <h3 className="card-title">Explore</h3>
                <hr className="card-div" />
                <p className='card-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </Card>
              <Card>
                <h3 className="card-title">Explore</h3>
                <hr className="card-div" />
                <p className='card-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </Card>
              <Card>
                <h3 className="card-title">Explore</h3>
                <hr className="card-div" />
                <p className='card-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </Card>
            </div>
          </About>
        </section>
      </>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))