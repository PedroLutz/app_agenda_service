import connectToDatabase from '../../../lib/db';
import ServicoModel from '../../../models/Servico';

const { Servico, ServicoSchema } = ServicoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(ServicoSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Servico(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Servico cadastrado com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar o servico', error);
    res.status(500).json({ error: 'Erro ao cadastrar o servico' });
  }
};
