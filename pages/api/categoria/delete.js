import connectToDatabase from '../../../lib/db';
import CategoriaModel from '../../../models/Categoria';

const { Categoria } = CategoriaModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID da categoria não foi fornecido' });
      }

      const deletedData = await Categoria.findByIdAndDelete(req.query.id);

      if (!deletedData) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      res.status(200).json({ message: 'Categoria excluída com sucesso' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao excluir categoria', error);
    res.status(500).json({ error: 'Erro ao excluir categoria' });
  }
};
