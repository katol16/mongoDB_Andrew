// 'mongodb'  to 3rd part module, trzeba zainstalować
// const MongoClient = require('mongodb').MongoClient;
// to pniżej to to samo  co powyżej. Poniżej użyto distructuring
const {MongoClient, ObjectID} = require('mongodb');

// tworzymy nową instancję ObjectID
// var obj = new ObjectID();
// console.log(obj);

// Distructuring - czyli dobra metoda ES6, by tworzyć zmienne z wartości obiektów
// var user = {name: 'Karol', age: 27};
// var {name} = user;
// console.log(name);

// W connect - pierwszy argument to URL, drugi to callback function
// Odpali sie jesli połąćżenie się uda lub nie.
// TodoApp to nazwa bazy danych, która zostanie utworzona automatycznie
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return poniżej spowoduję ,że jeśli bedzie error, to dalsza część kodu się nie wykona
        return console.log('Nie udało się połaczyć z mongoDb server');
    }
    console.log('Connected to MongoDB');

    // Nazwa collection - 'Todos'
    // insertOne, to metoda, dostępną na collection
    // Przyjmuje dwa argumenty
    // pierwszy to obiekt, który zostanie dodany,
    // drugi to callback function
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo'+err)
        }

        // w result.ops, będziemy mieli nasz obiekt
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    // Zadanie z kursu
    db.collection('Users').insertOne({
        // _id: 123,
        name: "Karol",
        age: 27,
        location: "Narol"
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert users'+err)
        }

        // w result.ops, będziemy mieli nasz obiekt
        console.log(JSON.stringify(result.ops, undefined, 2));
        // w _id mamy tak zwany timestamp, który możemy pobrać/oczytać
        // w ten sposób możemy też sprawdzić kiedy collection została utwprzona
        console.log(result.ops[0]._id.getTimestamp());
    });

    // Zamykamy połączenie
    db.close();
});
// Odpalenie naszego kodu w terminalu "node playground/mongodb-connect.js"
// Obiekt _id, jest tworzony automatycznie rpzez mongodb, ale możesz sam go utworzyć,
// po prostu przypisujac mu wartość np: _id: 123

// UWAGA!!!
// Jeżeli będziesz używał nowszejw ersji mongoDB, to ten kod będzie troche inny, masz w kursie jak będzie wyglądał!
// Lekcja 63!