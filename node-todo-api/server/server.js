var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose model
var Todo = mongoose.model('Todo', {
   text: {
        type: String,
        required: true,
        // minimalna dlugosc stringa
        minlength: 1,
       // trim usuwa "białe znaki" tam gdzie trzeba
       trim: true
   },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
       type: Number,
       default: null
    }
});

// Możemy ponizej dodać ten dokument do bazy za pomocą "save"
// W tym momencie dodajemy tylko dokument z challenge
var newTodo = new Todo({
    text: 'Cook dinner'
});

// Challenge
var otherTodo = new Todo({
   text: 'Nauka',
   completed: true,
   completedAt: 16
});


// Uwaga!
// WALIDACJA!
// Jeśli zechcemy dodać taki pusty obiekt do mongodb, to się doda, a tego byśmy nie chcieli dlatego ustaiwmy pewne defaultowe wartości
// lub dodamy 'required' w ten sposób będziemy wymagać tej wartości
// var newTodo = new Todo({
//
// });

// sprawdzenie walidacji
var newTodo = new Todo({
    text: '   Sprawdzamy czy trim działa    '
    // Uwaga! mimo, ze text jest ustawione na type: String, to jak wpiszesz tam 23, true, to on sobie to sparsuje do stringa i bedzie działać
    // Trzeba być jednak śiwaodmym, ze w moongose jest "type" i na to trzeba uważać, zeby nie było błedów
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('Unable to save todo')
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('Unable to save todo')
});

// Challenge
// Create user model:
// email - required,trim,string,min-length:1
// stwórz nwoego usera

// mongoose model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser =  new User({
   email: 'kakis@op.pl'
});

// save returns a promise
newUser.save().then((user) => {
    console.log('Saved User', user)
}, (e) => {
    console.log('Unable to save user', e)
});
