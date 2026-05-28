const express = require('express');
const app = express();
//1
app.get('/', (req, res) => {
  res.send('Testando o express!');
});
//2
app.get('/sobre', (req, res) => {
  res.send('segunda questão questão');
});
//3
app.get('/contato', (req, res) => {
    res.json({
    "email": "contato@email.com",
    "telefone": "(81) 99999-9999"
    });

});
//4
app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
});
//5
app.get('/inicio', (req, res) => {
  res.redirect('/');
});
//6
app.get('/usuarios/:id', (req, res) => {
res.send('usuario: ' +req.params.id);
});
//7
app.get('/produtos/:nome', (req, res) => {
res.send(req.params.nome);
});




app.listen(
    3000, 
    () => console.log(`Bem-vindo ao sistema`)
);