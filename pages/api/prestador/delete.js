import connectToDatabase from '../../../lib/db';
import PrestadorModel from '../../../models/Prestador';

const { Prestador } = PrestadorModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID do prestador não foi fornecido' });
      }

      const deletedData = await Prestador.findByIdAndDelete(req.query.id);

      if (!deletedData) {
        return res.status(404).json({ error: 'Prestador não encontrado' });
      }

      res.status(200).json({ message: 'Prestador excluído com sucesso' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao excluir prestador', error);
    res.status(500).json({ error: 'Erro ao excluir prestador' });
  }
};
