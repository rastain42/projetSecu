# projetSecu

- Serveur nodeJs
- Bdd sqLite
- Front html, TailwindCss

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
