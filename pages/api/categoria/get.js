import connectToDatabase from '../../../lib/db';
import CategoriaModel from '../../../models/Categoria';

const { Categoria } = CategoriaModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const categoria = await Categoria.find();

      res.status(200).json({ categoria });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar as categorias', error);
    res.status(500).json({ error: 'Erro ao buscar as categorias' });
  }
};
