var mongoose = require('mongoose');

// za pomocą poniższej lini utworzymy promise do połączenia z bazą mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// Eksportujemy moongose
// module.exports = {
//     mongoose: mongoose
// };
// Powyżej mamy ten sam zapis, tylko w ES6 mozemy użyc takeigo skrótu, wiec go uzyjemy
module.exports = {mongoose};