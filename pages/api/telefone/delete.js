import connectToDatabase from '../../../lib/db';
import TelefoneModel from '../../../models/Telefone';

const { Telefone } = TelefoneModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID do telefone não foi fornecido' });
      }

      const deletedData = await Telefone.findByIdAndDelete(req.query.id);

      if (!deletedData) {
        return res.status(404).json({ error: 'Telefone não encontrado' });
      }

      res.status(200).json({ message: 'Telefone excluído com sucesso' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao excluir telefone', error);
    res.status(500).json({ error: 'Erro ao excluir telefone' });
  }
};
