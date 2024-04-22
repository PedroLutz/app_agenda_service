import React, { useState } from 'react';

const SignInUsuario = () => {
  const [dados, setDados] = useState({

  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100vh'
    }}>
      <form>
        <div className="mb-3">
          <h1 class="h3 mb-3 font-weight-normal">Agende um serviço</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <select type="text"
                className="form-control"
                id="categoria"
                name="categoria"
                placeholder="Categoria"
                onChange={handleChange}
                value={dados.cpf}>
                <option defaultValue>Categoria</option>
              </select>
              <select type="text"
                style={{ marginTop: '5px' }}
                className="form-control"
                id="servico"
                name="servico"
                placeholder="Serviço"
                onChange={handleChange}
                value={dados.cpf}>
                <option defaultValue>Serviço</option>
              </select>
              <select type="text"
                style={{ marginTop: '5px' }}
                className="form-control"
                id="prestador"
                name="prestador"
                placeholder="Prestador"
                onChange={handleChange}
                value={dados.cpf}>
                <option defaultValue>Prestador</option>
              </select>
            </div>
            <div className="col" style={{ width: '20rem' }}>
              <input type='date'
                className="form-control"
                id="data"
                name="data"
                placeholder="Data de disponibilidade"
                onChange={handleChange}
              />
              <input type='time'
                style={{ marginTop: '5px' }}
                className="form-control"
                id="hora"
                name="hora"
                placeholder="Hora"
                onChange={handleChange}
              />
              <input type='text'
                style={{ marginTop: '5px' }}
                className="form-control"
                id="data"
                name="data"
                placeholder="Comentários"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '15px',
          display: 'flex-box',
          flexDirection: 'row',
        }}>
          <button type="submit" className="btn btn-lg btn-primary btn-block">Agendar</button>
        </div>
      </form>
    </div>
  );
}

export default SignInUsuario;