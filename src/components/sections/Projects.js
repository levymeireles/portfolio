import React from 'react';

const Projects = () => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="projects">

            <div className="w-100">
                <h2 className="mb-5">Projetos</h2>
                
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Visualizar repositórios e issues do GitHub</h3>
                        <a className="subheading mb-3" href="https://repositories-list.vercel.app/">Visualizar repositórios</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects