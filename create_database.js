// Using Online DataBase(Mlab/Mlab-atlas)

// require Mongoose
const Mongoose = require("mongoose");

// Link of database
const MongoDb_url = "mongodb+srv://admin:admin@mongodb-3l3rd.mongodb.net/MongoDB_Concept?retryWrites=true&w=majority"
// Connect to Mongoose database
Mongoose.connect(MongoDb_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then((success)=>{
	console.log('Db connected successfully')
})
.catch(e=>{
	console.log('Problem while connecting to DB')
})

// Both will create a database called name "MongoDB_Concept"


// Using local mongodb database

const Mongoose = require("mongoose");
const MongoDb_url = "mongodb://localhost:27017/MongoDB_Concept";  // local database link

Mongoose.connect(MongoDb_url, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});