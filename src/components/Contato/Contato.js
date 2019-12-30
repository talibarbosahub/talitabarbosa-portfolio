import React from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Button } from 'react-bootstrap';
import './contato.css'

const Contato =()=>(
    <div className="formulario">
        <h3>Contato</h3>
    <Container className="contato">
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Nome</Form.Label>
  <Form.Control
            required
            type="text"
            placeholder="Nome"
            
          />
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1"> 
    <Form.Label>Mensagem</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
<Button>Enviar</Button>
</Container>
</div>
)

export default Contato