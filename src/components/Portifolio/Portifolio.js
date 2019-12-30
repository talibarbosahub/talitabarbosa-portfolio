import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card'
import './portifolio.css'
import Example from './Modal'
import './portifolio.css'



const img1 = require("../../assets/M_de_Maravilhosas.png")
const img2 = require("../../assets/To_do_list_js.png")
const img3 = require("../../assets/Anessa.png")
const img4 = require("../../assets/Acessibilidade_na _web.png")

const Portifolio = (props) => (

  <Fragment>
    <div id="Portifolio"className="section_portifolio">
      <h3 >Projetos</h3>
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
              btntitle="Ver página" />
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
              btntitle="Ver no Github" />
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
              site="https://compreaneesa.com.br/"
              btntitle="Ver site" />
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
              texto="Página da web com intuido de diseminar informações sobre o tema de Acssibilidade na web e diretrizes de como fazer sites mais acessíveis para usuários com necessidades especiais. Eleita pela banca examinadora como um dos 4 melhores projetos da turma 8 do Bootcamp da Reprograma. Desenvolvida com React-Bootstrap "
              site="https://acessibilidade-web.netlify.com/"
              btntitle="Ver site" />
          </Card.Body>
        </Card>
      </div>
    </div>
  </Fragment>


)


export default Portifolio