import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DB_CONNECTION!);

  connection.isConnected = db.connections[0].readyState;
  console.log(`[server]: Connected to database`);
}

export default dbConnect;
