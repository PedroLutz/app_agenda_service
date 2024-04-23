import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

delete mongoose.connection.models['Prestador'];

const PrestadorSchema = new mongoose.Schema({
  usuario_id: ObjectId,
  cpf: String,
  cnpj: String,
  endereco_id: ObjectId,
  telefone_id: ObjectId,
  metodo_pagamento: String
}, { collection: 'prestadores' }); 

export default mongoose.models['Prestador'] || mongoose.model('Prestador', PrestadorSchema);
