import connectToDatabase from '../../../lib/db';
import ServicoModel from '../../../models/Servico';

const { Servico } = ServicoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID do serviço não foi fornecido' });
      }

      const deletedData = await Servico.findByIdAndDelete(req.query.id);

      if (!deletedData) {
        return res.status(404).json({ error: 'Servico não encontrado' });
      }

      res.status(200).json({ message: 'Servico excluído com sucesso' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao excluir serviço', error);
    res.status(500).json({ error: 'Erro ao excluir serviço' });
  }
};
