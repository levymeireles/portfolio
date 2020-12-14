import React from 'react';

const Awards = () => {


    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="awards"
        >
            <div className="w-100">
                <h2 className="mb-5">Premiações &amp; Certificações</h2>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>1<sup>º </sup>
                    Prêmio no evento de programação 24 horas - Hackathon no SENAI 509 - “Professor Euryclides
                    de Jesus Zerbini” em 2019
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Participação da Equipe de Robótica com Lego do Ensino Fundamental na escola SESI 437 –
                    Hortolândia em 2016
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Participação da Equipe de Robótica com Arduíno do Ensino Médio na escola SESI 437 –
                    Hortolândia em 2017
                    </li>
                    <li>
                    <br/>
                    <div className="subheading mb-3">Cursos de aperfeiçoamento profissional</div>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Desvendando a Blockchain – SENAI 509 – Duração: 20 horas
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Propriedade Intelectual – SENAI 509 – Duração: 14 horas
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Tecnologia da Informação e Comunicação – SENAI 509 – Duração: 14 horas
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Empreender SENAI – SENAI 509 – Duração: 20 horas
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Finanças Pessoais – SENAI 509 – Duração: 14 horas
                    </li>
                    <li>
                    <i className="fa-li fa fa-trophy text-warning"></i>
                    Certificado de proficiência da Microsoft
                    </li>
                    
                </ul>
            </div>
        </section>
    );
}

export default Awards