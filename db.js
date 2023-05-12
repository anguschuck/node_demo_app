const mongoose = require("mongoose");
const db = process.env.DB_URI;

//const db = 'mongodb+srv://anguschuck:rpdm5fezs3Z5y8uL@clusterdemoapp.ye7fw9q.mongodb.net/?retryWrites=true&w=majority';

console.log(rocess.env.DB_URI);

async function connectDB() {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;