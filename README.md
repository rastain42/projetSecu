# projetSecu

- Serveur nodeJs
- Bdd sqLite
- Front html, TailwindCss

## démarche

  `npm -i`
  `node server.js`

## Concept

- introduire un commentaire avec un photo qui cache du js

- ce js récupère des éléments / data possiblement vulnérables ( ex: onglet /ajoutDroitsAdmin)

- envoie un ajax a notre endpoint

- deuxième injection xss pour exploit la faille

- bam on a les droits

## Faille XSS

on va tout péter avec de l'injection js

TODO : champ pété pour injecter le js

## Tables SqLite

Table client :

- ClientID
- Sex
- LastVisitDate
- VisitCount
- Age

Table revenus :

- DayID
- DayIncome
- Date
- Losses
- SoldArticlesCount

Table articles :

- ArticleId
- Name
- StockCount
- SoldCount

Table soldArticles :

- SoldId
- ArticleID
- Price

Table Users :

- UserId
- Email
- Password
