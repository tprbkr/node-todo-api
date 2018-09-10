//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{ useNewUrlParser: true }, (err, client) => {
    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
      console.log('Connected to Mongodb server');
      const db = client.db('TodoApp');

//deleteMany
      // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
      //   console.log(result);
      // });
//deleteOne
      // db.collection('Users').deleteOne({_id: new ObjectID("5b938924fb069014c2a94c86")}).then((result) => {
      //   console.log(result);

//findOneAndDelete
              db.collection('Users').findOneAndDelete({name:"prbkr"}).then((result) => {
                console.log(result);
                //console.log(JSON.stringify(result, undefined, 2));
                // both gives same out put

});
      //client.close();
});
