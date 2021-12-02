import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card'
import Example from './Modal'
import './portfolio.css'



const img1 = require("../../assets/M_de_Maravilhosas.png")
const img2 = require("../../assets/To_do_list_js.png")
const img3 = require("../../assets/Anessa.png")
const img4 = require("../../assets/Acessibilidade_na _web.png")
const img5 = require("../../assets/sds_vendas.png")



const Portfolio = (props) => (

  <Fragment id="cards">
    <div id="Portifolio"className="section_portfolio">
      <h4 tabindex ="5"><i class=" fas fa-cogs"></i> Projetos </h4>
      <div className="quote"><p className="info-box" > A programação me ensinou que coisas grandes são alcançadas não todas de uma vez mas aos poucos e que nunca devemos ter 
medo de começar de novo, por que nunca começamos do zero mas sim da experiência</p>  </div>
      
      </div>
          <div className="cards-projetos" >
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img-card" variant="top" src={img1} />
          <Card.Body>
            <Card.Title>M de Maravilhosas</Card.Title>
            <Card.Text>

            </Card.Text>
            <Example 
              title="M de Maravilhosas"
              imagem={img1}
              texto="Primeiro projeto no Bootcamp da reprograma.
              Página da personalidadde Oprha Winfrey, para o projeto M de Maravilhosas desenvolvida com HTML, CSS e Javascript, totalmente responsiva."
              site="https://reprograma.github.io/T8-projeto1-m-de-maravilhosa/personalidade/Oprah%20Winfrey/index.html"
              btnSite="Acessar página"
              git="https://github.com/talibarbosa-hub/T8-projeto1-m-de-maravilhosa"
              />
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img-card" variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Lista de Tarefas</Card.Title>
            <Card.Text>

            </Card.Text>
            <Example
              title="Lista de Tarefas"
              texto="Projeto desenvolvido com HTML, CSS e Javascript onde o usuário pode adicionar tarefas com categorias, excluir tarefas individualmente, apagar todas as tarefas, ou limpar somente as tarefas realizadas. "
              site="https://github.com/talibarbosa-hub/projeto-todolist"
              btnSite="Acessar página"
              git="https://github.com/talibarbosa-hub/projeto-todolist"
              />
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img-card" variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Aneesa</Card.Title>
            <Card.Text>

            </Card.Text>
            <Example
              title="Aneesa"
              texto="Site Comercial desenvolvido em parceiria com a equipe de alunas do Bootcamp da Reprograma, layout e conteúdo disponibilizados pelo Designer e cliente. O site é reponsivo e foi desenvolvido com Bootstrap, Saas, Jquery, Javascript e HTML. "
              site="https://www.compreaneesa.com.br/"
              btnSite="Acessar página" 
              git="https://github.com/talibarbosa-hub/aneesa"
              />
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img-card" variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Acessibilidade na web </Card.Title>
            <Card.Text>

            </Card.Text>
            <Example
              title="Acessibilidade na web"
              texto="Página da web com intuito de disseminar informações sobre o tema de Acessibilidade na web e diretrizes de como fazer sites mais acessíveis para usuários com necessidades especiais. Eleita pela banca examinadora como um dos 4 melhores projetos da turma 8 do Bootcamp da Reprograma. Desenvolvida com React-Bootstrap"
              site="https://acessibilidade-web.netlify.app/"
              btnSite="Acessar página" 
              git="https://github.com/talibarbosa-hub/Acessibilidade-Web"
              />
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img className="img-card" variant="top" src={img5} />
          <Card.Body>
            <Card.Title>DS Vendas</Card.Title>
            <Card.Text>

            </Card.Text>
            <Example
              title="DS Vendas"
              texto="Projeto desenvolvido com Front end em React, Backend Java e Banco de Dados com SQL hospedado no Heroku e Netlify."
              site="https://dsvendas-spring-react.netlify.app/"
              btnSite="Ver site"
              git="https://github.com/talibarbosa-hub/projeto-sds3"
              />
          </Card.Body>
        </Card>
      </div>
  </Fragment>


)

export default Portfolio