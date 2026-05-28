const express = require('express');
const app = express();
app.get('/sobre', (req, res) => {
  res.send('segunda questão questão');
});
app.listen(
    3000, 
    () => console.log(`Bem-vindo ao sistema`)
);
