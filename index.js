const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Testando o express!');
});

app.get('/sobre', (req, res) => {
  res.send('segunda questão questão');
});

app.get('/contato', (req, res) => {
    res.json({
    "email": "contato@email.com",
    "telefone": "(81) 99999-9999"
    });
  res.send('segunda questão questão');
});

app.listen(
    3000, 
    () => console.log(`Bem-vindo ao sistema`)
);