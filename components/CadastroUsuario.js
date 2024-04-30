import React, {useState} from 'react';
import Link from 'next/link';
import { handleSubmit } from '../functions/crud';
import { handleChange } from '../functions/global';

const SignInUsuario = () => {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const enviarDados = async(e) => {
    e.preventDefault();
    await handleSubmit(`usuario`, dados);
  }

    return (
        <div style={{
          display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', 
        height: '100vh',
        }}>
            <form style={{width: '300px'}} onSubmit={(e) => enviarDados(e)}>
              <div className="mb-3">
              <h1 class="h3 mb-3 font-weight-normal">Faça seu cadastro</h1>
                
              </div>
              <label htmlFor="nome" className="sr-only">Nome</label>
              <input type="text" 
                  className="form-control" 
                  id="nome" 
                  name="nome" 
                  placeholder="Nome"
                  onChange={(e) => handleChange(e, setDados, dados)} 
                  value={dados.nome}/>
              <label htmlFor="email" className="sr-only">Nome</label>
              <input type="text" 
              style={{marginTop: '5px'}}
                  className="form-control" 
                  id="email" 
                  name="email" 
                  placeholder="Email"
                  onChange={(e) => handleChange(e, setDados, dados)} 
                  value={dados.email}/>
                  <label htmlFor="senha" className="sr-only">Senha</label>
              <input type="password" 
              style={{marginTop: '5px'}}
                  className="form-control" 
                  id="senha" 
                  name="senha" 
                  placeholder="Senha"
                  onChange={(e) => handleChange(e, setDados, dados)} 
                  value={dados.senha}/>
              <div style={{
                marginTop: '15px',
                display: 'flex-box',
                flexDirection: 'row', 
              }}>
                <button type="submit" className="btn btn-lg btn-primary btn-block">Cadastrar</button>
                <Link href="/login"><p style={{marginTop: '15px', marginLeft:'10px'}}>Já tem conta? Faça login!</p></Link>
              </div>
            </form>
        </div>
    );
}

export default SignInUsuario;