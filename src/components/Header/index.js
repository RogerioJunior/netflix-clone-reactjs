/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default () => {
    return (
        <header className='black'>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" 
                    alt="Netflix logo"></img>
                </a>
            </div>
            <div className='header--user'>
                < a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix avatar"></img>
                </a>
            </div>
        </header>
    );
}