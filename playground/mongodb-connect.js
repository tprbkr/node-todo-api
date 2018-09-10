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

      // db.collection('Todos').insertOne({
      //   text:'To do something',
      //   completed:false
      // }, (err, result)=> {
      //   if(err) {
      //     return console.log('Unable to insert todo', err);
      //   }
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      // });

      // db.collection('Users').insertOne({
      //   name:'prbkr',
      //   age: 25,
      //   location:'vijayawada',
      //   // completed:false
      // }, (err, result)=> {
      //   if(err) {
      //     return console.log('Unable to insert into users', err);
      //   }
      //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
      // });
      client.close();
});
