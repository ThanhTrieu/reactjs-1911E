import React from 'react';
import { Link, useLocation } from "react-router-dom";

const HeaderPage = () => {
  const location = useLocation();
  const nameRouter = location.pathname;

  return (
    <>
       <header id="home">
        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
              <li className={nameRouter === '/' ? 'current': ''}>
                <Link to="/">
                  <span>Home</span>
                </Link>
                
              </li>
              <li className={nameRouter === '/resume' ? 'current': ''}>
                <Link to="/resume">
                  <span>Resume</span>
                </Link>
              </li>
              <li className={nameRouter === '/works' ? 'current': ''}>
                <Link to="/works">
                  <span>Works</span>
                </Link>
              </li>
              <li className={nameRouter === '/contact' ? 'current': ''}>
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline">I'm Jonathan Doe.</h1>
              <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><span href="#"><i className="fa fa-facebook"></i></span></li>
                <li><span href="#"><i className="fa fa-twitter"></i></span></li>
                <li><span href="#"><i className="fa fa-google-plus"></i></span></li>
                <li><span href="#"><i className="fa fa-linkedin"></i></span></li>
                <li><span href="#"><i className="fa fa-instagram"></i></span></li>
                <li><span href="#"><i className="fa fa-dribbble"></i></span></li>
                <li><span href="#"><i className="fa fa-skype"></i></span></li>
              </ul>
          </div>
        </div>

        <p className="scrolldown">
          <span className="smoothscroll" href="#about"><i className="icon-down-circle"></i></span>
        </p>
        </header> 
    </>
  )
}

export default React.memo(HeaderPage);