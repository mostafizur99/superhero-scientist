import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFirstAid, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            <div className="top-bar">
                <div className="row">
                    <div className="col-md-3 top-bar-left">
                        <p><FontAwesomeIcon icon={faFirstAid} /><span className="top-bar-logo">HeroScientist</span></p>
                    </div>
                    <div className="col-md-9 top-bar-right">
                        <h2>"We Care, We Fight!!"</h2>
                    </div>
                </div>
            </div>
            <div className="nav-bar container">
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/publications">Publications</a></li>
                        <li><a href="/articles">News</a></li>
                        <li className="nav-social"><a href="/contact"><span className="nav-icon"><FontAwesomeIcon icon={faHeartbeat} /></span>Stay With Us: <span className="text-color">+123-456-789</span></a></li>
                    </ul>
                </nav>
            </div>
            <div className="banner ">
                <h2 className="text-color">Make The Best Scientist Team</h2>
                <h6>The world is fighting with pandemic cov-19, select worriors for our scientist team.</h6>
                <h4>Total Budget: 100 Million</h4>
            </div>
        </div>
    );
};

export default Header;