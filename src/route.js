const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/room.ejs', (req, res) => res.render('room'))
route.get('/create-pass.ejs', (req, res) => res.render('create-pass'))

module.exports = route
