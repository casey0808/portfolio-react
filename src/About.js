import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='About'>
                <h2 id='about-title'>
                    <i className='fa fa-user-circle'></i> About Me{' '}
                </h2>
                <div>I am Casey, currently living in Shanghai. </div>
                <div>
                    I worked as a data analyst for almost two years, and
                    recently switched to front-end developer / data
                    visualization engineer.
                </div>
                <div>
                    With passion for data visualization and web development, I
                    want to combine the knowledge of both fields,{' '}
                </div>
                <div>
                    create aesthetic and user-friendly websites, and showcase
                    data in better ways.
                </div>
                <h2 id='contact'>Get in touch</h2>
                <span>
                    <a
                        className='profile-link'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/casey0808'
                    >
                        <i className='fab fa-github'></i>
                    </a>
                    <a
                        className='profile-link'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/cancui1208'
                    >
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a
                        className='profile-link'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='mailto: casey_c0808@outlook.com'
                    >
                        <i className='fa fa-envelope'></i>
                    </a>
                </span>
            </div>
        );
    }
}

export default About;
