const express = require('express')
const database = require("../repositories/database")
const path = require('path');

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))

app.get("/health-check", (req, res) =>{
  res.send("Está rodando!")
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/cadastro.html'));
})

app.get("/buscar", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/search.html'));
})

app.post("/usuarios/criar", (req, res) => {
  let data = req.body;

  let newUser = database.createUser(data)
  console.log("criou")
  res.send('Data Received: ' + JSON.stringify(newUser) + ' usuário criado com sucesso');
})

app.get("/usuarios/:id", (req, res) => {
  const user_id = req.params.id

  let result = database.getUser(user_id)
  console.log(result)

  res.send(`${JSON.stringify(result)}`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
