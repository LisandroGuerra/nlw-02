import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logomarca Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Imagem de fundo com pessoas conversando por aplicativo" 
                    className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} 
                        alt="icone de livro"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} 
                        alt="icone de quadro de aula"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 666 conexões já realizadas
                    <img src={purpleHeartIcon} alt="icone de coração"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;