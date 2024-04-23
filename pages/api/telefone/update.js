import connectToDatabase from '../../../lib/db';
import Telefone from '../../../models/Telefone';

export default async (req, res) => {
  try {
    await connectToDatabase();

    if (req.method === 'PUT') { 
      const { id } = req.query; 

      if (!id) {
        return res.status(400).json({ error: 'O ID do telefone é obrigatório para a atualização.' });
      }

      const { numero, marcador } = req.body; 

      const updateFields = {};
      if (numero) updateFields.numero = numero;
      if (marcador) updateFields.marcador = marcador;

      if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'Pelo menos um campo deve ser fornecido para a atualização.' });
      }

      const updatedTelefone = await Telefone.findByIdAndUpdate(id, updateFields, { new: true });

      if (!updatedTelefone) {
        return res.status(404).json({ error: 'Telefone não encontrado.' });
      }

      return res.status(200).json(updatedTelefone);
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro ao atualizar o telefone', error);
    res.status(500).json({ error: 'Erro ao atualizar o telefone' });
  }
};
