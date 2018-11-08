// 'mongodb'  to 3rd part module, trzeba zainstalować
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return poniżej spowoduję ,że jeśli bedzie error, to dalsza część kodu się nie wykona
        return console.log('Nie udało się połaczyć z mongoDb server');
    }
    console.log('Connected to MongoDB');

    // deleteMany
    //Poniżej usuniemy wszystkie dokument z 'Eat lunch'
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // deleteOne, usunie pierwszą dokument, która bedzie pasowała do nasyzch kryterii
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // findOneAndDelete, zwróci nam znaleziony i usunięty dokument
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // })

    // Chellenge
    // db.collection("Users").deleteMany({name: "Karol"}).then(result => {
    //     console.log(result);
    // })
    // W powyższym przykładzie i innych nie musimy robić promise, czyli "then", ale dobrze jest dawać "then"

    db.collection("Users").findOneAndDelete({ _id : new ObjectID("5be48fb1052f04860a9dc878")}).then(result => {
        console.log(result);
    })

    // Zamykamy połączenie
    // db.close();
});





