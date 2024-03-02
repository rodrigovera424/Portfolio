import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/Rodrigo.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> Completed Projects</small>
            </article>
          </div>
          <p>As a Full Stack Developer graduated from the prestigious Coderhouse
            Institute, I have extensive experience in creating and optimizing robust
            web solutions, encompassing both front-end and back-end technologies.
            My passion for programming led me to establish my own web development business,
            showcasing not only my technical prowess but also my commitment and dedication
            to each project. Beyond my development training, I possess knowledge in complementary areas such as computing, 3D printing, design, and electronics. This allows me to have a comprehensive and multidisciplinary perspective on every challenge I face. I am actively seeking opportunities that allow me to contribute my skills and experience to innovative teams and projects. My goal is to contribute to the success and growth of forward-thinking companies while continuing my professional development and acquiring new skills. If you believe my profile could be a valuable addition to your team or project, I would be delighted to discuss potential collaborations!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro