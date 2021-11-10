import React, { Fragment } from 'react';
import './footer.css'

const Footer = () => (
    <Fragment>
        <div id="Footer">
            <div className="informations">
<div>
                    <p className="autor__media">Contato & social media</p>
                    </div>
                    <div className="icons" >
                        <a className="icon-footer" href="https://github.com/talibarbosa-hub" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt"></i></a>
                        <a className="icon-footer"href="https://www.linkedin.com/in/talitabarbosas/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                        <a className="icon-footer"href="mailto:eng.talitabarbosa@gmail.com?subject= Contato Site" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"></i></a>
                        {/* <a className="icon-footer"href="https://twitter.com/talitabarbosas" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a> */}
                        {/* <a className="icon-footer"href=" http://api.whatsapp.com/send?1=pt_BR&phone=5511989071737" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a> */}
                        <a className="icon-footer"href=" https://www.instagram.com/eutalibarbosa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        <a className="icon-footer"href=" https://open.spotify.com/playlist/4ruGnt5G6Uu0so9XUSmX00?si=a4c291360ed44a8e" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
                    </div>


        </div>
        </div>
    <div className="copyright">
        Copyright © Portfólio Talita Barbosa 2019 - Developed with React & Bootstrap
        </div>
    </Fragment >
)

export default Footer