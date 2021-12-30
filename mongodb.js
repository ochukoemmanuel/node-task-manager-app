// CRUD operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjactID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect ' + error);
    }

    const db = client.db(databaseName);

    db.collection('users')
      .deleteMany({
        name: 'Mj',
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
