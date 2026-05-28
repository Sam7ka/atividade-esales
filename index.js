const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema!');
});
app.listen(
    3000, 
    () => console.log(`Bem-vindo ao sistema`)
);
