import connectToDatabase from '../../../lib/db';
import CategoriaModel from '../../../models/Categoria';

const { Categoria, CategoriaSchema } = CategoriaModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'PUT') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: 'O ID da categoria é obrigatório para a atualização.' });
      }

      const propriedadesNomes = Object.keys(CategoriaSchema.paths);
      const updateFields = {};

      for (const key in req.body) {
        if (req.body[key]) {
          if (propriedadesNomes.includes(key)) {
            updateFields[key] = req.body[key];
          } else {
            return res.status(400).json({ error: 'Os campos fornecidos não são compatíveis com o do modelo!' });
          }
        }
      }

      if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'Pelo menos um campo deve ser fornecido para a atualização.' });
      }

      const updatedData = await Categoria.findByIdAndUpdate(id, updateFields, { new: true });

      if (!updatedData) {
        return res.status(404).json({ error: 'Categoria não encontrada.' });
      }

      return res.status(200).json(updatedData);
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao atualizar a categoria', error);
    res.status(500).json({ error: 'Erro ao atualizar a categoria' });
  }
};
