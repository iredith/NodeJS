const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ajay8192:ajay8192@nodejs-guide.mv99q1s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let _db = undefined;

const mongoConnect = callback => {
  mongoClient.connect()
    .then(client => {
      console.log('*'.repeat(50));
      console.log('Database connection successful');
      console.log('*'.repeat(50));
      _db = client.db();
      callback();
    })
    .catch(error => {
      console.error('====> Error:', error);
      throw error;
    });
}

const getDB = () => {
  if (_db) return _db;
  throw 'No Database Found!!!';
}

// async function run(callback) {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     callback();
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

module.exports = {
  mongoConnect,
  getDB
};