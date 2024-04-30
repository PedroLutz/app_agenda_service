import mongoose from 'mongoose';

delete mongoose.connection.models['Usuario'];

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
}, { collection: 'usuarios' });

const Usuario = mongoose.models['Usuario'] || mongoose.model('Usuario', UsuarioSchema);

export default { Usuario, UsuarioSchema };
