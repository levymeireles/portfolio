import React from 'react';

const Education = () => {

    return (
        <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="education">

            <div className="w-100">
                <h2 className="mb-5">Educação</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">CE Educacional SESI 437 SP</h3>
                        <div className="subheading mb-3">Ensino Médio</div>
                        <div>Desenvolvimento Educacional</div>
                        {/* <p></p> */}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Janeiro 2017 - Dezembro 2019</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini </h3>
                        <div className="subheading mb-3">Técnico em informática</div>
                        <div>Tecnologia da informação </div>
                            <p>Hardware<br/>Desenvolvimento de Websites<br/>Softwares<br/>Aplicativos Movéis</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Janeiro 2018 - Dezembro 2019</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
                
export default Education