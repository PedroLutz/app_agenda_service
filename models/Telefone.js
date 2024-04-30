import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

delete mongoose.connection.models['Telefone'];

const TelefoneSchema = new mongoose.Schema({
    numero: String,
    marcador: String,
    usuarioId: ObjectId
}, { collection: 'telefones' });

const Telefone = mongoose.models['Telefone'] || mongoose.model('Telefone', TelefoneSchema);

export { Telefone, TelefoneSchema };

