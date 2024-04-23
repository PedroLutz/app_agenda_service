import connectToDatabase from '../../../lib/db';
import Usuario from '../../../models/Usuario';

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'PUT') { 
      const { id } = req.query; 

      if (!id) {
        return res.status(400).json({ error: 'O ID do usuário é obrigatório para a atualização.' });
      }

      const { nome, email, senha } = req.body; 

      const updateFields = {};
      if (nome) updateFields.nome = nome;
      if (email) updateFields.email = email;
      if (senha) updateFields.senha = senha;

      if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'Pelo menos um campo deve ser fornecido para a atualização.' });
      }

      const updatedUsuario = await Usuario.findByIdAndUpdate(id, updateFields, { new: true });

      if (!updatedUsuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      return res.status(200).json(updatedUsuario);
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao atualizar o usuário', error);
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};
