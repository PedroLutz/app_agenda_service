import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

delete mongoose.connection.models['Usuario'];

const UsuarioSchema = new mongoose.Schema({
    descricao: String,
    categoria_id: ObjectId,
    prestador_id: ObjectId,
    dados_extra: String,
}, { collection: 'usuarios' });

export default mongoose.models['Usuario'] || mongoose.model('Usuario', UsuarioSchema);
