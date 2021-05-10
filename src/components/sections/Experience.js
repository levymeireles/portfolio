import React from 'react';

const Experience = () => {

    return (
        <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience">

        <div className="w-100">
            <h2 className="mb-5">Experiência</h2>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">Estagiário de Desenvolvimento</h3>
                    <div className="subheading mb-3">Evolucional Editora</div>
                    <p>
                        Trabalhei como estagiário na startup Evolucional na área de desenvolvimento, 
                        cuidando e criando as páginas e funções para o sistema interno da empresa.
                    </p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Março 2020 - Janeiro 2021</span>
                </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                    <h3 className="mb-0">Desenvolvedor Júnior</h3>
                    <div className="subheading mb-3">Evolucional Editora</div>
                    <p>
                        Atualmente trabalho como desenvolvedor júnior na startup Evolucional na área de desenvolvimento, 
                        criando e implementando features, telas, API entre outras demandas da empresa.
                    </p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Feveiro 2021 - Atualmente</span>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Experience