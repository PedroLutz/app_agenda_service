import connectToDatabase from '../../../lib/db';
import UsuarioModel from '../../../models/Usuario';

const { Usuario, UsuarioSchema } = UsuarioModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(UsuarioSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Usuario(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar o usuário', error);
    res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
  }
};
