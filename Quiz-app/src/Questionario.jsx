// Questionario.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

function Questionario() {
  // Obtendo o estado passado na navegação
  const location = useLocation();
  const pergunta = location.state?.pergunta || 'Nenhuma pergunta foi cadastrada.';

  return (
    <div>
      <h1>Questionário</h1>
      <p><strong>Pergunta Cadastrada:</strong></p>
      <label>{pergunta}</label>
    </div>
  );
}

export default Questionario;
