import mongoose from 'mongoose';

delete mongoose.connection.models['Categoria'];

const CategoriaSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
}, { collection: 'categorias' });

export default mongoose.models['Categoria'] || mongoose.model('Categoria', CategoriaSchema);
