const path = require('path'); 

const express = require('express');
const bodyParser = require('body-parser');

const errorController =  require('./controller/error');

//const expressHbs = require('express-handlebars');

const app = express();
// app.engine('hbs', expressHbs());
app.set('view engine','ejs');
//app.set('view engine','pug'); //this defines pug templating engine. Kind of builtin engine
app.set('views','views');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public'))); 

//app.use('/admin', adminRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);