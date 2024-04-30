import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

delete mongoose.connection.models['Prestador'];

const PrestadorSchema = new mongoose.Schema({
  usuario_id: ObjectId,
  cpf: String,
  cnpj: String,
  metodo_pagamento: String
}, { collection: 'prestadores' }); 

const Prestador =  mongoose.models['Prestador'] || mongoose.model('Prestador', PrestadorSchema);

export default { Prestador , PrestadorSchema};
