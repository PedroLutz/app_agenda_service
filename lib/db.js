// lib/db.js
import mongoose from 'mongoose';

const MONGODB_URI='mongodb+srv://vercel-admin-user-6626f6a3e6ca7c00b23305a8:a1VBRUEvRJQ1pZeD@cluster0.8sg1bdo.mongodb.net/dbAgendaApp?retryWrites=true&w=majority';

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
