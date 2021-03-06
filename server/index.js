var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var {renderLayout} = require('../templates/index.js');
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/public', express.static(path.resolve(__dirname, '../public')));




// app.get('/calendar/:id', function(req, res) {
//   const requestID = req.params.id;
//   let item = list.filter(item => {
//     return item.id == requestID
//   })
//   res.json(item[0]);
// });





// app.get('/api/todos', function(req, res) {
//   // read data
//   fs.readFile('public/todo.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     let todolist = JSON.parse(data);
//     console.log(todolist)
//     res.json(todolist);
//   });
// });

// app.get('/api/todos/:todoID', function(req, res) {
//   const requestID = req.params.todoID;
//   // read data
//   fs.readFile('public/todo.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     let todolist = JSON.parse(data);
//     // choose item
//     todolist.forEach(item => {
//       if (item.key == requestID){
//         res.json(item);
//       }
//     })
    
//   });
// });

// app.post('/api/todos', 
//   (req, res, next) => {
//     if (req.body.title != ''){
//       next();
//     } else {
//       res.status(404).send('Validation error'); 
//     }
//   },
//   (req, res, next) => {
//     const todoitem = {
//       key: Date.now(),
//       title: req.body.title,
//       completed: false
//     }
//     // read data
//     fs.readFile('public/todo.json', 'utf8', function (err, data) {
//       if (err) throw err;
//       let todolist = JSON.parse(data);
//       // add data
//       todolist.push(todoitem);
//       // write data
//       fs.writeFile('public/todo.json', JSON.stringify(todolist, null, '\t'), function (err) {
//         if (err) throw err;
//         // console.log(JSON.stringify(todolist))
//       });
//       res.json(todolist);
//     });   
//   }
// );

// app.put('/api/todos/:todoID', function(req, res) {
//   const requestID = req.params.todoID;
//   // read data
//   fs.readFile('public/todo.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     let todolist = JSON.parse(data);
//     // change data
//     todolist.forEach(item => {
//       if (item.key == requestID){
//         item.completed = !item.completed;
//       }
//     })
//     // write data
//     fs.writeFile('public/todo.json', JSON.stringify(todolist, null, '\t'), function (err) {
//       if (err) throw err;
//       // console.log(JSON.stringify(todolist))
//     });
//     res.json(todolist);
//   });
// });

// app.delete('/api/todos/:todoID', function(req, res) {
//   const requestID = req.params.todoID;
//   // read data
//   fs.readFile('public/todo.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     let todolist = JSON.parse(data);
//     // delete data
//     let thisToDo = todolist.filter(item => {
//       return item.key == requestID
//     })[0];
//     const index = todolist.indexOf(thisToDo); 
//     todolist.splice(index, 1);
//     // write data
//     fs.writeFile('public/todo.json', JSON.stringify(todolist, null, '\t'), function (err) {
//       if (err) throw err;
//       // console.log(JSON.stringify(todolist))
//     });
//     res.json(todolist);
//   });
// });

app.get('*', function(req, res) {
  res.status(200).send(renderLayout());
});


// errors
app.use(function(req, res, next) {
  res.status(404).send('not found'); 
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');  
});

app.listen(PORT);





