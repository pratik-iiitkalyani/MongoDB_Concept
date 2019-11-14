// Create collection in database

// require Mongoose
const Mongoose = require("mongoose");
// Link of database
const MongoDb_url = "mongodb+srv://admin:admin@mongodb-3l3rd.mongodb.net/MongoDB_Concept?retryWrites=true&w=majority"
// Connect to Mongoose database
Mongoose.connect(MongoDb_url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	// const dbo = db('MongoDB_Concept')
	createCollection('customers', (err, res) => {
		if (err) throw err;
		console.log("Created")
		db.close()
	})	
})

// Both will create a database called name "MongoDB_Concept"
