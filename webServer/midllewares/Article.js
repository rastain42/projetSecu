const db = require('../models')





const addArticle = async (req, res, next) => {
  try{

    const article = req.body
    const notEmpty = Object.values(article).every(c => c != "")
    console.log(notEmpty, article)
    if(notEmpty) {
      const newArticle = new db.Article({title: "hello", content: "world", image: "images", user_id: "helllo"})
      console.log("article", article)
      newArticle.save()
      res.status(200).send(newArticle);

    } else {
      res.status(422).send(err)
    }


  } catch(err){
    res.send(err)
  }

}


const getArticles = async (req, res, next) => {
  try {
    const data = await Article.find({})
    res.send(data)  

  } catch (e) {
    console.log(e)
    res.send(e);
  }
}

module.exports = {getArticles, addArticle};