import connectToDatabase from '../../../lib/db';
import PrestadorModel from '../../../models/Prestador';

const { Prestador } = PrestadorModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const prestador = await Prestador.find();

      res.status(200).json({ prestador });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar os prestadores', error);
    res.status(500).json({ error: 'Erro ao buscar os prestadores' });
  }
};
