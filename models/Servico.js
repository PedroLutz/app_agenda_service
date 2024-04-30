import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

delete mongoose.connection.models['Servico'];

const ServicoSchema = new mongoose.Schema({
    descricao: String,
    categoria_id: ObjectId,
    prestador_id: ObjectId,
    dados_extra: String,
}, { collection: 'servicos' });

const Servico = mongoose.models['Servico'] || mongoose.model('Servico', ServicoSchema); 
 
export default { Servico, ServicoSchema };
