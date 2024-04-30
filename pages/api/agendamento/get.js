import connectToDatabase from '../../../lib/db';
import AgendamentoModel from '../../../models/Agendamento';

const { Agendamento } = AgendamentoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const agendamento = await Agendamento.find();

      res.status(200).json({ agendamento });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar os agendamentos', error);
    res.status(500).json({ error: 'Erro ao buscar os agendamentos' });
  }
};
