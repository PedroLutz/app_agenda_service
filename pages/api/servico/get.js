import connectToDatabase from '../../../lib/db';
import ServicoModel from '../../../models/Servico';

const { Servico } = ServicoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const servico = await Servico.find();

      res.status(200).json({ servico });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar os serviços', error);
    res.status(500).json({ error: 'Erro ao buscar os serviços' });
  }
};
