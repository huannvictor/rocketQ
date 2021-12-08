const express = require('express')
const QuestionControler = require('./controllers/questionController')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/room.ejs', (req, res) => res.render('room'))
route.get('/create-pass.ejs', (req, res) => res.render('create-pass'))

// formato do formulário dentro do modal
route.post('/room/:room/:question/:action', QuestionControler.index)

module.exports = route
