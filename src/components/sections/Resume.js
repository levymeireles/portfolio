import React from 'react';

const Resume = ({firstName, lastName, phone, email, socialLinks, children}) => {

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="about">

            <div className="w-100">
                <h1 className="mb-0">
                    {firstName}
                    <span className="text-primary">{lastName}</span>
                </h1>
                <div className="subheadingWhite mb-5">
                    <a href="https://api.whatsapp.com/send?phone=5519988347204&text=Ol%C3%A1%20acessei%20seu%20portfolio%20online%2C%20gostaria%20de%20falar%20com%20voc%C3%AA">{phone}</a>&nbsp·&nbsp<a href={`mailto:${email}`}>{email}</a>
                </div>

                <p className="lead mb-5">{ children }</p>

                <div className="social-icons">
                    {socialLinks.map(social => {
                    const { icon, url } = social;
                    return (
                        <a key={url} href={url}>
                        <i className={`fab ${icon}`}></i>
                        </a>
                    );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Resume