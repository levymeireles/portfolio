import React from 'react';

const Education = () => {


    return (

        <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="skills"
            >
            <div className="w-100">
                <h2 className="mb-5">Habilidades</h2>

                <div className="subheading mb-3">Linguagens de programação &amp; Ferramentas</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                    <i className="fab fa-html5" title="Html"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-css3-alt" title="Css"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-js-square" title="JavaScript"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-angular" title="Angular"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-node-js" title="NodeJs"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-java" title="Java"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-android" title="Android"></i>
                    </li>
                     <li className="list-inline-item">
                    <i className="fas fa-database" title="SqlServer &amp; MySQL"></i>
                    </li>
                    
                    <li className="list-inline-item">
                    <i className="fas fa-laptop-code" title="Microsoft Visual Studio &amp; Visual Studio Code"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-github-square" title="GitHub &amp; GitLab"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="fab fa-slack" title="Conexão Slack"></i>
                    </li> 
                    <li className="list-inline-item">
                    <i className="fab fa-npm" title="Npm"></i>
                    </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-check"></i>
                    Metodologia Ágil &amp; Scrum
                    </li>
                    <li>
                    <i className="fa-li fa fa-check"></i>
                    Cascata &amp; Prototipação
                    </li>
                    <li>
                    <i className="fa-li fa fa-check"></i>
                    XP &amp; Debugging
                    </li>
                </ul>
            </div>
        </section>
    );
}
                    
export default Education