import React from 'react';

const Formation = () => {

    return (
        <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="formation">

            <div className="w-100">
                <h2 className="mb-5">Formação</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">UNASP - Centro Universitário Adventista de São Paulo - Hortolândia, SP</h3>
                        <div className="subheading mb-3">Ensino Superior - Sistemas de informação</div>
                            <p>1º semestre</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Feveiro 2021 - Previsão (Dezembro 2024)</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">SENAI - Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini - Campinas, SP</h3>
                        <div className="subheading mb-3">Ensino Técnico - Tecnologia da informação</div>
                            <p>Hardware<br/>
                            Desenvolvimento de Websites e softwares<br/>
                            Aplicativos Movéis<br/>
                            Manipulação de dados<br/>
                            Banco de dados<br/>
                            Gestão de pessoas<br/>
                            Projetos</p>  
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Janeiro 2018 - Dezembro 2019</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">SESI - Centro Educacional SESI 437 - Hortolândia, SP</h3>
                        <div className="subheading mb-3">Ensino Médio</div>
                        <div>Desenvolvimento Educacional</div>
                        {/* <p></p> */}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Janeiro 2017 - Dezembro 2019</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
                
export default Formation