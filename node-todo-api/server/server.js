// library imports
var express = require('express');
var bodyParser = require('body-parser');

// destructuring
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


// Setting up server
var app = express();

app.use(bodyParser.json());

// POST request
app.post('/todos', (req, res) => {
    // body jest przechowane w bodyParser
    // console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=> {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
   console.log('Started on port 3000');
});






// Z Poprzednich Lekcji!!!
// Z Poprzednich Lekcji!!!
// Z Poprzednich Lekcji!!!
// // Możemy ponizej dodać ten dokument do bazy za pomocą "save"
// // W tym momencie dodajemy tylko dokument z challenge
// // tutaj tworzymy nową instancję za pomocą konstruktora Todo
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });
//
// // Challenge
// var otherTodo = new Todo({
//    text: 'Nauka',
//    completed: true,
//    completedAt: 16
// });
//
//
// // Uwaga!
// // WALIDACJA!
// // Jeśli zechcemy dodać taki pusty obiekt do mongodb, to się doda, a tego byśmy nie chcieli dlatego ustaiwmy pewne defaultowe wartości
// // lub dodamy 'required' w ten sposób będziemy wymagać tej wartości
// // var newTodo = new Todo({
// //
// // });
//
// // sprawdzenie walidacji
// var newTodo = new Todo({
//     text: '   Sprawdzamy czy trim działa    '
//     // Uwaga! mimo, ze text jest ustawione na type: String, to jak wpiszesz tam 23, true, to on sobie to sparsuje do stringa i bedzie działać
//     // Trzeba być jednak śiwaodmym, ze w moongose jest "type" i na to trzeba uważać, zeby nie było błedów
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// });
//
// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// });
//
// // Challenge
// // Create user model:
// // email - required,trim,string,min-length:1
// // stwórz nwoego usera
//
//
// var newUser =  new User({
//    email: 'kakis@op.pl'
// });
//
// // save returns a promise
// newUser.save().then((user) => {
//     console.log('Saved User', user)
// }, (e) => {
//     console.log('Unable to save user', e)
// });
