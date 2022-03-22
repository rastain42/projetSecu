const express = require('express')
const path = require('path');
const router = express.Router()
const authenticationMiddleware = require('../midllewares/Auth.js')
const extractBearerToken = require('./Auth')


// Basic Routes
router.get('/login',  (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/login.html'));
})

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/home.html'));
})

router.get('/profil', authenticationMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/profil.html'));
})
router.get('/notifications',authenticationMiddleware,  (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/notifications.html'));
})
router.get('/disconnect',authenticationMiddleware,  (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/disconnect.html'));
})


// Auth routes


const { signIn, signUp } = require('../midllewares/User.js')


// router.route('/singIn').get(authMiddleware, dashboard)
router.route('/signUp').post(signUp)
router.route('/signIn').post(signIn)



const { addArticle, getArticles } = require('../midllewares/Article.js')

// router.route('/singIn').get(authMiddleware, dashboard)
router.route('/articles').post(authenticationMiddleware, addArticle)

router.route('/articles').get(getArticles)



module.exports = router


