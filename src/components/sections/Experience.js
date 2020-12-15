import React from 'react';

const Experience = () => {


    return (
        <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
        >
        <div className="w-100">
            <h2 className="mb-5">Experiência</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                <h3 className="mb-0">Estagiário de Desenvolvimento</h3>
                <div className="subheading mb-3">Evolucional</div>
                <p>
                    Atualmente trabalho como estagiário na startup Evolucional na área de desenvolvimento, 
                    cuidando e criando as páginas e funções para o sistema interno da empresa.
                </p>
                </div>
                <div className="resume-date text-md-right">
                <span className="text-primary">Março 2020 - Atualmente</span>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Experience