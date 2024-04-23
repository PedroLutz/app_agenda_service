import connectToDatabase from '../../../lib/db';
import Usuario from '../../../models/Usuario';

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'DELETE') {
      if (!req.query.id) {
        return res.status(400).json({ error: 'O ID do usuário não foi fornecido' });
      }

      const deletedUsuario = await Usuario.findByIdAndDelete(req.query.id);

      if (!deletedUsuario) {
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
