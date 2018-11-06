// 'mongodb'  to 3rd part module, trzeba zainstalować
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return poniżej spowoduję ,że jeśli bedzie error, to dalsza część kodu się nie wykona
        return console.log('Nie udało się połaczyć z mongoDb server');
    }
    console.log('Connected to MongoDB');

    // find bez żadnego argumentu zwróci całość danych, ponieważ trzeba to w jakiś sposób sparsować, bo find zwróci "mongoDB coś tam chyba 'cursour'" i do tego użyjemy toArray,
    // która obiekty z mongoDB wrzuci do tablicy
    // toArray, zwróci 'promise', wiec użyjemy 'then'
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // Zamykamy połączenie
    // db.close();
});
