// lib/db.js
import mongoose from 'mongoose';

const MONGODB_URI='mongodb+srv://vercel-admin-user-65b00fdf4a18fb342dc7fbb6:D1lAxgwSWwE1JudX@cluster0.4oovdep.mongodb.net/projetosocial?retryWrites=true&w=majority';

if (!MONGODB_URI) {
  throw new Error('A variável de ambiente MONGODB_URI não está definida.');
}

let cachedConnection = null;

export default async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  const connection = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedConnection = connection;
  return connection;
}
