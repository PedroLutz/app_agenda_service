import React, {useState} from 'react';

const SignInUsuario = () => {
  const [dados, setDados] = useState({
    
  });

  const handleTelefone = (event) => {
    function telefoneMask(value){
      if (!value) return "";
      value = value.replace(/\D/g,'');
      if(value.length <= 8){
        value = value.replace(/^(\d{2})(\d)/, '($1) $2');
      } else{
        value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3');
      };
    
      return value;
    }
    let input = event.target;
    input.value = telefoneMask(input.value);
  };

  const handleZipCode = (event) => {
    function zipCodeMask(value){
      if (!value) return "";
      value = value.replace(/\D/g,'');
      value = value.replace(/(\d{5})(\d)/,'$1-$2');
      return value;
    }
    let input = event.target;
    input.value = zipCodeMask(input.value);
  };

  const handleCPF = (event) => {
    function cpfMask(value){
      if (!value) return "";
      value = value.replace(/\D/g,'');
      if(value.length <= 6){
        value = value.replace(/^(\d{3})(\d)/, '$1.$2');
      } else if (value.length <= 9){
        value = value.replace(/^(\d{3})(\d{3})(\d)/, '$1.$2.$3');
      } else {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
      };
      return value;
    }
    let input = event.target;
    input.value = cpfMask(input.value);
  };

  const handleCNPJ = (event) => {
    function cnpjMask(value){
      if (!value) return "";
      value = value.replace(/\D/g,'');
      if(value.length <= 5){
        value = value.replace(/^(\d{2})(\d)/, '$1.$2');
      } else if (value.length <= 8){
        value = value.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2.$3');
      } else if (value.length <= 12){
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d)/, '$1.$2.$3/$4');
      } else{
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5');
      };
      return value;
    }
    let input = event.target;
    input.value = cnpjMask(input.value);
  };

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
          <h1 className="h3 mb-3 font-weight-normal">Torne-se um prestador<br/>de serviços</h1>
          {/*CNPJ, endereço, email, telefone, CEP, forma de recebimento */}
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input type="text" 
                    className="form-control" 
                    id="cpf" 
                    name="cpf" 
                    maxLength={14}
                    placeholder="CPF"
                    onKeyUp={handleCPF}
                    onChange={handleChange} 
                    value={dados.cpf}/>
                <input type="text" 
                style={{marginTop: '5px'}}
                    className="form-control" 
                    id="cnpj" 
                    name="cnpj" 
                    maxLength={18}
                    placeholder="CNPJ (opcional)"
                    onKeyUp={handleCNPJ}
                    onChange={handleChange} 
                    value={dados.cnpj}/>
                <input type="text" 
                style={{marginTop: '5px'}}
                    className="form-control" 
                    id="endereço" 
                    name="endereço" 
                    placeholder="Endereço"
                    onChange={handleChange} 
                    value={dados.endereco}/>
              </div>
              <div className="col">
                <input type="text" 
                    className="form-control" 
                    id="telefone" 
                    name="telefone" 
                    placeholder="Telefone"
                    maxLength={15}
                    onKeyUp={handleTelefone}
                    onChange={handleChange} 
                    value={dados.telefone}/>
                <input type="text" 
                style={{marginTop: '5px'}}
                    className="form-control" 
                    maxLength={9}
                    id="cep" 
                    name="cep" 
                    placeholder="CEP"
                    onKeyUp={handleZipCode}
                    onChange={handleChange} 
                    value={dados.cep}/>
                <select
                style={{marginTop: '5px'}}
                    className="form-control" 
                    id="pagamento" 
                    name="pagamento" 
                    onChange={handleChange} 
                    value={dados.pagamento}>
                    <option defaultValue>Modo de pagamento</option>
                    <option value="pix">PIX</option>
                    <option value="pix">Conta Bancária</option>
                    <option value="pix">PayPal</option>
                </select>
              </div>
            </div>
          </div>
          
          <div style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <button type="submit" className="btn btn-lg btn-primary" style={{width: '15rem'}}>Cadastrar</button>
          </div>
        </form>
    </div>
);
}

export default SignInUsuario;