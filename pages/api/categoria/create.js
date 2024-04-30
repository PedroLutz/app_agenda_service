import connectToDatabase from '../../../lib/db';
import CategoriaModel from '../../../models/Categoria';

const { Categoria, CategoriaSchema } = CategoriaModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(CategoriaSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Categoria(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Categoria cadastrada com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar a categoria', error);
    res.status(500).json({ error: 'Erro ao cadastrar a categoria' });
  }
};
