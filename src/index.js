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
import Space from './components/Space';

let data = [
{
  title: "Explore",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  imgURL: 'https://images.pexels.com/photos/841286/pexels-photo-841286.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=350'
},
{
  title: "Seek More",
  info: "In this life you have the rare chance to SEEK more than what the past generations have, DO THAT!",
  imgURL: 'https://images.pexels.com/photos/314703/pexels-photo-314703.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=350'
},
{
  title: "Go Beyond",
  info: "We all hold the special abilty to go beyond what you have done yesterday dont let that chance get past you!",
  imgURL: 'https://images.pexels.com/photos/42148/pexels-photo-42148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=350'
}]

const printCards = () => {
  // let items = [];
  // for (let index = 0; index < data.length; index++) {
  //   items.push(<Card userData={data[index]} />)
  // }
  // return items;
  return data.map((item, index) => {
    return (<Card userData={item} key={index} />)
  })
}

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
              {printCards()}
            </div>
          </About>
        </section>
        <section className='part3'>
          <Space />
        </section>
      </>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))