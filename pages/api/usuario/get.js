import connectToDatabase from '../../../lib/db';
import UsuarioModel from '../../../models/Usuario';

const { Usuario } = UsuarioModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'GET') {
      const usuario = await Usuario.find();

      res.status(200).json({ usuario });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};
