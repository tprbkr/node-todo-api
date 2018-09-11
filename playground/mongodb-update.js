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
  //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b960326843e851e8c180866')}, {
    //
    //               $set:{
    //                 completed:true
    //               }
    //             }, {
    //                 returnOrginal:false
    //               }).then((result) => {
    //             console.log(result);
    //           });

    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b938951840c0014cf5df006')}, {

                  $set:{
                    name:"Angelina"
                  },
                  $inc: {
                    age:1
                  }
                }, {
                    returnOrginal:false
                  }).then((result) => {
                console.log(result);
              });


      //client.close();
});
