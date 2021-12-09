const express = require('express')
const QuestionControler = require('./controllers/questionController')
const RoomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass.ejs', (req, res) => res.render('index', {page: 'create-pass'}))

route.get('/room/:room', roomController.open)


route.post('/question/:room/:question/:action', QuestionControler.index)
route.post('/create-room', RoomController.create)

module.exports = route
