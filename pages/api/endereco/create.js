import connectToDatabase from '../../../lib/db';
import EnderecoModel from '../../../models/Endereco';

const { Endereco, EnderecoSchema } = EnderecoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(EnderecoSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Endereco(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Endereco cadastrada com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar a endereço', error);
    res.status(500).json({ error: 'Erro ao cadastrar a endereço' });
  }
};
