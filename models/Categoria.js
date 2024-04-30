import mongoose from 'mongoose';

delete mongoose.connection.models['Categoria'];

const CategoriaSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
}, { collection: 'categorias' });

const Categoria = mongoose.models['Categoria'] || mongoose.model('Categoria', CategoriaSchema);

export default {Categoria, CategoriaSchema};
