import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './nav.css'

const NavStyle = () => (
  <Nav className="justify-content-end nav-style" >
    <Nav.Link href="#Habilidades">Habilidades</Nav.Link>
    <Nav.Link href="#Sobre">Sobre</Nav.Link>
    <Nav.Link href="#Portifolio">Projetos</Nav.Link>
    <Nav.Link href="#Footer">Contato</Nav.Link>
  </Nav>

)

export default NavStyle     