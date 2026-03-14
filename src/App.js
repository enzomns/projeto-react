import React, {useState} from "react";
import { render, screen } from '@testing-library/react';

// Teste CI react
test('renders app without crashing', () => {
render(<App />);
});

function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function verificar() {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    }else{
      setMensagem("E-mail ou senha incorretos.");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <div>
        <input type="email" placeholder="E-mail" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div>
        <input type="password" placeholder="Senha" value={senha}
        onChange={(e) => setSenha(e.target.value)}/>
      </div>

      <div>
        <button onClick={verificar}>Acessar</button>
      </div>

      <div>
        <label>{mensagem}</label>
      </div>
    </div>
  );
}

export default App;