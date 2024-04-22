import React from 'react';
import Link from 'next/link';

const Login = () => {
    return (
        <div className='text-center'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100vh'
            }}>
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Faça seu login</h1>
                <label htmlFor="inputEmail" className="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Senha</label>
                <input style={{ marginTop: '5px' }} type="password" id="inputPassword" class="form-control" placeholder="Senha" required="" />
                <div className="checkbox mb-3">
                    <label style={{ marginTop: '10px' }}>
                        <input type="checkbox" value="remember-me" /> Lembre de mim
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Acessar</button>
                <Link href="/cadastro-usuario"><p style={{ marginTop: '15px' }}>Não tem conta? Faça seu cadastro!</p></Link>
            </form>
        </div>
    );
}

export default Login;