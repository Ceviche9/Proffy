import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../Assets/images/logo.svg';
import LandingImg from '../../Assets/images/landing.svg';

import studyIcon from '../../Assets/images/icons/study.svg';
import GiveClassIcon from '../../Assets/images/icons/give-classes.svg';
import PurpleHeart from '../../Assets/images/icons/purple-heart.svg';

import './styles.css';

export const Landing = () =>  {
 
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={LandingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes"  className="give-classes">
            <img src={GiveClassIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={PurpleHeart} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

