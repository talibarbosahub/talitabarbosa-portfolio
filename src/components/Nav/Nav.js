import React from 'react';
import Nav from 'react-bootstrap/Nav';  
import './nav.css'

const NavStyle = () => (
    <Nav className="justify-content-end nav-style" activeKey="/home">
      <Nav.Item>
      <Nav.Link eventKey="link-1">Habilidades</Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link href="/home">Projetos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Sobre</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contato</Nav.Link>
      </Nav.Item>

    </Nav>

)

export default NavStyle     