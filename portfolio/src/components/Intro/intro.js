import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import AnimatedTitle from '../AnimatedTitle';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Ankit Kumar</span> <br />
                    <AnimatedTitle />
                </span>
                <p className="introPara">
                    I’m a passionate software developer who builds modern web apps, websites, and mobile applications that are fast, responsive, and user-friendly.
                </p>

                <div className="introBtns">
                    <a
                        href="https://drive.google.com/file/d/1Gj9UCRcXoY7tQgNZFVk3iZ2IzpNoH19R/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn"> Resume</button>
                    </a>

                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <button className="btn getInTouchBtn">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Intro;
