import connectToDatabase from '../../../lib/db';
import UsuarioModel from '../../../models/Usuario';

const { Usuario, UsuarioSchema } = UsuarioModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID do usuário não foi fornecido' });
      }

      const deletedData = await Usuario.findByIdAndDelete(req.query.id);

      if (!deletedData) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      res.status(200).json({ message: 'Usuário excluído com sucesso' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao excluir usuário', error);
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
};
