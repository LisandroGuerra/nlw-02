import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/4958565?s=460&u=ceff8d11ef56a14564076dde36855e84b4c04d8d&v=4" alt="Foto do professor"/>
                <div>
                    <strong>Lisandro Guerra</strong>
                    <span>Eletrônica</span>
                </div>
            </header>

            <p>Entusiasta de circuitos digitais e sensores.
                <br/> <br/>
                Apaixonado por microcontroladores e por robótica.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Botão de contato Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;