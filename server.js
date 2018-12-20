const express = require('express');
const exphbs  = require('express-handlebars');
const hbs = require('hbs');

const app = express();

//llama a un layout o pagina de maqueta
app.engine('.handlebars', exphbs({defaultLayout: 'main'}));

//llamo a hbs
app.set('view engine', 'handlebars');

//crear carpetas publicas
app.use(express.static(__dirname + '/public'));

//guarda los pedazos de codigo que reusaré en donde lo requiera
hbs.registerPartials(__dirname + '/views/partials');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//gestioino las peticiones para home
app.get('/', (req, res) => {
    //renderizo la pagina hbs y la envio
    res.render('home', {
        layout:false,
        nombre:'Mauricio',
        getAnio:new Date().getFullYear()
    });
});

//gestioino las peticiones para about
app.get('/about', (req, res) => {
    //renderizo la pagina hbs y la envio
    res.render('about', {
        layout:false,
        getAnio:new Date().getFullYear()
    });
});
 
app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);
});