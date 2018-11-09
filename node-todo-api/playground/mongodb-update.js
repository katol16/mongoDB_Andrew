// 'mongodb'  to 3rd part module, trzeba zainstalować
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return poniżej spowoduję ,że jeśli bedzie error, to dalsza część kodu się nie wykona
        return console.log('Nie udało się połaczyć z mongoDb server');
    }
    console.log('Connected to MongoDB');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5be4936b052f04860a9dc9dc")
    // }, {
    //     // Tutaj musimy użyć tzw. "update operators" - w tym przypadku "$set"
    //     // samo completed: true bez $set, by nie zadziałało
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    // Challange
    // db.collection('Users').findOneAndUpdate({name: "Karol"}, {
    //     $set: {
    //         name: "Przemek"
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //    console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({name: "Przemek"}, {
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });

    // Zamykamy połączenie
    // db.close();
});





