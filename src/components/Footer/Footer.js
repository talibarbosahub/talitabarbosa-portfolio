import React, { Fragment } from 'react';
import './footer.css'

const Footer = () => (
    <Fragment>
        <div>
            <div className="informations">
            <span>
                    <p className="autor__media">Encontre-me nas redes sociais</p>
                    <span className="icons" >
                        <a className="icon-footer" href="https://github.com/talibarbosa-hub" target="_blank" rel="noopener noreferrer"><i class=" fab fa-github-square"></i></a>
                        <a className="icon-footer"href="https://www.linkedin.com/in/talitabarbosas/" target="_blank" rel="noopener noreferrer"><i class=" fab fa-linkedin"></i></a>
                        <a className="icon-footer"href="https://twitter.com/talitabarbosas" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square"></i></a>
                        <a className="icon-footer"href=" http://api.whatsapp.com/send?1=pt_BR&phone=5511989071737" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp-square"></i></a>
                    </span>
            </span>

        </div>
        </div>
    <div className="copyright">
        Copyright © Portifólio Talita Barbosa 2019 - Developed with React & Bootstrap
        </div>
    </Fragment >
)

export default Footer