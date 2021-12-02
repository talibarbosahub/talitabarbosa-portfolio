import React, { Fragment } from 'react';
import './main.css'



const Habilidades = () => (
    <Fragment>
        <div id="Habilidades" className="container-habilities">
            <div>
                <div class="habilities">
                    <div tabindex ="3" aria-label="Icone de habilidade em Amazon Web Services">
                        <i class="icon fab fa-aws"></i>
                        <p>AWS</p>
                    </div>
                    <div tabindex ="3" aria-label="Icone de habilidade em Java" >
                    <i class="icon fab fa-java"></i>
                        <p>Java</p>    
                    </div>
                    <div tabindex ="3" aria-label="Icone de habilidade em JavaScript"  >
                        <i class="icon fab fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div tabindex ="3" aria-label="Icone de habilidade em React" >
                        <i class="icon fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div tabindex ="3" aria-label="Icone de habilidade em Angular" >
                        <i class="icon fab fa-angular"></i>
                        <p>Angular</p>
                    </div>

                    <div tabindex ="3" aria-label="Icone de habilidade em Git"  >
                        <i class="icon fab fa-git-alt"></i>
                        <p>Git</p>
                    </div>
                    <div tabindex ="3" aria-label="Icone de habilidade em Scrum" >
                        <i class="icon fas fa-tasks"></i>
                        <p>Scrum</p>
                    </div>
                    <div tabindex ="3"aria-label="Icone de habilidade em Sass" >
                        <i class="icon fab fa-sass"></i>
                        <p>Sass</p>
                    </div>
                    <div tabindex ="3"aria-label="Icone de habilidade em Jquery" >
                        <i class="icon fas fa-book"></i>
                        <p>jQuery</p>
                    </div>
                    <div tabindex ="3"aria-label="Icone de habilidade em Bootstrap"  >
                        <i class="icon fab fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

const curriculo = require("../../assets/Talita_Barbosa_CV.pdf")

export const Sobre = () => (
    <div id="Sobre" className="section_about">
        <h3 tabindex ="4"> <i className=" code-icon fas fa-code"></i> Hello, world!</h3>
        <div className="about" >
            <p className="info-box" tabindex ="4">
                Contribui durante 10 anos na área comercial e após me tornar mãe iniciei a transição de carreira para tecnologia através do bootcamp front-end da <span ><a className="link" href="https://www.reprograma.com.br/" target="_blank" rel="noopener noreferrer"> reprograma </a></span> em parceria com o facebook. Sou engenheira de software no Itaú Unibanco, onde participei de projetos com microfront-ends (SPA Angular), back-end ( Java Spring) e faço parte da modernização com AWS, DevOps e Insfraestructure as a service. Sou bootcamp teach lead na reprograma e trabalho diariamente para trazer mais diversidade e equidade de gênero para nossa área de TI. Como uma entusiasta da acessibilidade na web, palestro sobre o tema de como fazer sites mais acessíveis e também sobre minha experiência de transição de carreira na maternidade.
            </p>
            {/* <p className="curriculo"> <a className="link" href={curriculo} download>Clique aqui para download do curriculo completo em PDF</a></p> */}

        </div>

    </div>

)

export default Habilidades
