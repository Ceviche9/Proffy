import React from 'react';

import WhatsAppIcon from '../../Assets/images/icons/whatsapp.svg';

import './styles.css';

export const TeacherItem = () => {

    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars.githubusercontent.com/u/83431609?v=4" alt="Tundê Cavalcante" />
            <div>
                <strong>
                    Tundê Cavalcante
                </strong>
                <span>Química</span>
            </div>
        </header>
        <p>
        Entusiasta das melhores tecnologias de química avançada.
        </p>
        <br />
        <p>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <div>
            <p>Preço/Hora</p>
            <strong>R$ 20,00</strong>
            </div>
            <button  type="button">
                <img src={WhatsAppIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>

    )
}