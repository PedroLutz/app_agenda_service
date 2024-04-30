import connectToDatabase from '../../../lib/db';
import TelefoneModel from '../../../models/Telefone';

const { Telefone, TelefoneSchema } = TelefoneModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(TelefoneSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Telefone(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Telefone cadastrado com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar o telefone', error);
    res.status(500).json({ error: 'Erro ao cadastrar o telefone' });
  }
};
