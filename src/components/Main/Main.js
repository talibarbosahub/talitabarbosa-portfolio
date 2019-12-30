import React, { Fragment } from 'react';
import './main.css'



const Habilidades = () => (
    <Fragment>
        <div className="container-habilities">
            <h3>Habilidades</h3>
            <div>
                <div class="habilities">
                    <div>
                        <i class="icon fab fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div >
                        <i class="icon fab fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div >
                        <i class="icon fab fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div >
                        <i class="icon fab fa-sass"></i>
                        <p>Sass</p>
                    </div>
                    <div >
                        <i class="icon fas fa-book"></i>
                        <p>jQuery</p>
                    </div>
                    <div>
                        <i class="icon fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div >
                        <i class="icon fab fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </div>
                    <div >
                        <i class="icon fab fa-git-alt"></i>
                        <p>Git</p>
                    </div>
                    <div >
                        <i class="icon fas fa-tasks"></i>
                        <p>Scrum</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

const curriculo = require("../../assets/Talita_Barbosa_CV.pdf")

export const Sobre = () => (
    <div className="section_about">
        <h3 >Olá, muito prazer!</h3>
            <p className="about" >
                    Sou uma desenvolvedora focada e organizada, contribui durante 10 anos na área  comercial e TI o que me possibilitou desenvolver soft skills tais como trabalho em equipe e planejamento estratégico. Estou em transição de carreira para desenvolvimento Front-end pois descobri vocação e entusiasmo pela profissão.
                    Participei do Bootcamp integral e imersivo da <span ><a className="link" href="https://www.reprograma.com.br/" target="_blank"> reprograma </a></span> com foco em UX Design,  HTML, CSS, Javascript, Git & Github, Scrum, JQuery, Lógica de programação, bibliotecas e frameworks como Sass, React e Bootstrap. Desenvolvemos desde projetos de aplicações à entrega de site implementado para cliente como voluntariado.
                    
                    <p className="curriculo"> <a className="link" href={curriculo} download>Clique aqui para download do curriculo completo em PDF</a></p>
                    
   </p>

    </div>

)

export default Habilidades
