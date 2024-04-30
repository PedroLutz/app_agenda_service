import connectToDatabase from '../../../lib/db';
import AgendamentoModel from '../../../models/Agendamento';

const { Agendamento, AgendamentoSchema } = AgendamentoModel;

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const propriedadesNomes = Object.keys(AgendamentoSchema.paths);

      const requestBodyObject = {};
      propriedadesNomes.forEach(prop => {
        requestBodyObject[prop] = req.body[prop];
      });

      const newData = new Agendamento(requestBodyObject);

      await newData.save();

      res.status(201).json({ message: 'Agendamento cadastrado com sucesso!' });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao cadastrar o agendamento', error);
    res.status(500).json({ error: 'Erro ao cadastrar o agendamento' });
  }
};
