import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button aria-label="Botão que abre um modal com a descrição do projeto e links para acessar a pagina e repositorio" variant="primary" onClick={handleShow}>
      <i class="fas fa-plus"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img scr={props.imagem} alt={props.alt} />
            <p>{props.texto}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button aria-label="Botão para acessar o projeto" href={props.site} target="_blank">
          Acessar <i class="fas fa-external-link-alt"></i>
          </Button>
          <Button aria-label="Botão para acessar o repositorio no Github" href={props.git} target="_blank">
            <i class="fab fa-github-alt"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);

export default Example