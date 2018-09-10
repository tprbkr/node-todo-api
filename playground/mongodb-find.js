//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',
{ useNewUrlParser: true }, (err, client) => {
    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
      console.log('Connected to Mongodb server');
      const db = client.db('TodoApp');

      db.collection('Todos').find({_id: new ObjectID("5b93a4c45de6478fcc9abb31")}).toArray().then((docs)=> {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
        },(err) => {
          console.log('unable to fetch todos', err);

      });

      // db.collection('Users').find({name:"nag"}).toArray().then((docs)=> {
      //
      //   console.log('Users');
      //    console.log(JSON.stringify(docs, undefined, 2));
      //   },(err) => {
      //     console.log('unable to fetch Users', err);
      //
      // });

      //client.close();
});
