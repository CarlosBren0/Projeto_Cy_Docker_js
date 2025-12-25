const express = require('express');
const app = express();
const port = 3000;

// Endpoint simples
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao meu app de testes!</h1>');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
