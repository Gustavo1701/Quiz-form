import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';  // Remover BrowserRouter
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';
import Questionario from './Questionario';

function App() {
  const [pergunta, setPergunta] = useState([]);
  const [novaPergunta, setNovaPergunta] = useState('');
  const navigate = useNavigate();

  const handleAdicionar = () => {
    if (novaPergunta.trim() !== '') {  // Verifica se a pergunta não está vazia
      setPergunta([...pergunta, novaPergunta]);  // Adiciona a nova pergunta ao array
      setNovaPergunta('');  // Limpa o campo de entrada
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/questionario', { state: { pergunta } });
  };

  return (
    <>
      <Nav variant="pills" activeKey="1">
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to="/home">
            Cadastrar Pergunta
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" as={Link} to="/questionario">
            Questionário
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route
          path="/home"
          element={
            <Form className='mt-5' onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Cadastrar Pergunta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite sua pergunta."
                  value={pergunta}
                  onChange={(e) => setPergunta(e.target.value)}
                />
              </Form.Group>

              <Button variant="outline-success">Adicionar</Button>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          }
        />

        {/* Rota para a página de Questionário */}
        <Route path="/questionario" element={<Questionario />} />
      </Routes>
    </>
  );
}

export default App;
