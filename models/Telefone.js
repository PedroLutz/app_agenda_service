import mongoose from 'mongoose';

delete mongoose.connection.models['Telefone'];

const TelefoneSchema = new mongoose.Schema({
    numero: String,
    marcador: String,
}, { collection: 'telefones' });

export default mongoose.models['Telefone'] || mongoose.model('Telefone', TelefoneSchema);
