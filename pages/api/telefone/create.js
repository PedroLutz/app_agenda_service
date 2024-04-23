import connectToDatabase from '../../../lib/db';
import Telefone from '../../../models/Telefone';

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const { numero, marcador } = req.body;
      
      const newTelefone = new Telefone({
        numero, marcador
      });

      await newTelefone.save();

      res.status(201).json({ message: 'Telefone cadastrado com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar o telefone', error);
    res.status(500).json({ error: 'Erro ao cadastrar o telefone' });
  }
};
