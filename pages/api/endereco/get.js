import connectToDatabase from '../../../lib/db';
import EnderecoModel from '../../../models/Endereco';

const { Endereco } = EnderecoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const endereco = await Endereco.find();

      res.status(200).json({ endereco });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar os endereços', error);
    res.status(500).json({ error: 'Erro ao buscar os endereços' });
  }
};
