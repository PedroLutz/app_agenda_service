import connectToDatabase from '../../../lib/db';
import Usuario from '../../../models/Usuario';

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const { nome, email, senha } = req.body;
      
      const newUsuario = new Usuario({
        nome, email, senha
      });

      await newUsuario.save();

      res.status(201).json({ message: 'Lançamento cadastrado com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar o lançamento', error);
    res.status(500).json({ error: 'Erro ao cadastrar o lançamento' });
  }
};
