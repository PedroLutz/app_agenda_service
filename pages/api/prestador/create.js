import connectToDatabase from '../../../lib/db';
import PrestadorModel from '../../../models/Prestador';

const { Prestador, PrestadorSchema } = PrestadorModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(PrestadorSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Prestador(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Prestador cadastrada com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar a endereço', error);
    res.status(500).json({ error: 'Erro ao cadastrar a endereço' });
  }
};
