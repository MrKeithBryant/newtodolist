const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
//const models = require('../models');
const app = express();
Router.use(bodyParser.urlencoded({extended: true}));

Router.get('/', function(req,res) {
  model.Todo.findAll().then(function(todos) {
    todos.forEach(function(todo){
          console.log(todo);
    })
    res.render('todolist', {todos: todos});
  })
});


Router.post('/create', function(req, res) {
    models.Todos.create({
      title: req.body.todo,
    }).then(function(newTodo){
      res.redirect('/');
    })
});
Router.post('/complete', function(req, res) {
  console.log(req.body);
  models.Todo.destroy ({
    completed: new Date()
  },{
    where: {
    id: Number(req.body.todo)
  }
}).then(function(complete) {
  res.redirect('/');
})
});
module.exports = Router;

app.listen(3000, function(){
  console.log("Loaded");
});


/*
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const models = require('./models');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use('/public', express.static('public'))
const todos = [
  "Wash the car"
];


app.get("/", function(req, res) {
  res.render("index", { todos: todos });
});
//const mustacheExpress = require('mustache-express');
//const path = require('path');
//const app = express();



app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
});
*/



/*
'use strict';
module.exports=function(sequelize, DataTypes)
  var Todo = sequelize.define('Todo'), {
    title
  }app.set('views', './views');
  app.set('view engine', 'mustache');
  app.use('public', express.static("public"));

*/
