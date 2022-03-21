const express = require('express')
const router = express.Router()

const { addArticle, getArticles } = require('../midllewares/Article.js')

// router.route('/singIn').get(authMiddleware, dashboard)
router.route('/articles').post(addArticle)

router.route('/articles').get(getArticles)



module.exports = router