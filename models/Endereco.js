import mongoose from 'mongoose';

delete mongoose.connection.models['Endereco'];

const EnderecoSchema = new mongoose.Schema({
    rua: String,
    cidade: String,
    estado: String,
    bairro: String,
    num: String,
    complemento: String,
    cep: String,
    marcador: String
}, { collection: 'enderecos' });

export default mongoose.models['Endereco'] || mongoose.model('Endereco', EnderecoSchema);
