import connectToDatabase from '../../../lib/db';
import Telefone from '../../../models/Telefone';

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const telefone = await Telefone.find();

      res.status(200).json({ telefone });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar os telefones', error);
    res.status(500).json({ error: 'Erro ao buscar os telefones' });
  }
};
