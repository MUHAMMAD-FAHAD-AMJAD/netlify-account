const mongoose = require('mongoose');

const connectDB = async () => {
  // This will read the MONGO_URI from the environment variables provided by the hosting service (Render).
  // This is more secure than using a .env file in production.
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error('Error: MONGO_URI is not defined in environment variables.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
