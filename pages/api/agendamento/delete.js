import connectToDatabase from '../../../lib/db';
import AgendamentoModel from '../../../models/Agendamento';

const { Agendamento } = AgendamentoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID do agendamento não foi fornecido' });
      }

      const deletedData = await Agendamento.findByIdAndDelete(req.query.id);

      if (!deletedData) {
        return res.status(404).json({ error: 'Agendamento não encontrado' });
      }

      res.status(200).json({ message: 'Agendamento excluído com sucesso' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao excluir agendamento', error);
    res.status(500).json({ error: 'Erro ao excluir agendamento' });
  }
};
