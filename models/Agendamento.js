import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

delete mongoose.connection.models['Agendamento'];

const AgendamentoSchema = new mongoose.Schema({
    cliente_id: ObjectId,
    servico_id: ObjectId,
    data_inicio: Date,
    data_fim: Date,
    status: String
}, { collection: 'agendamentos' });

const Agendamento = mongoose.models['Agendamento'] || mongoose.model('Agendamento', AgendamentoSchema);

export default {Agendamento, AgendamentoSchema};
