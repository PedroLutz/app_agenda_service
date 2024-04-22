import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/login">Service App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/cadastro-usuario">Cadastro usuário</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/cadastro-prestador">Cadastro prestador</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/agende-um-servico">Agende um serviço</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default index;