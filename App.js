import React, { useState } from "react";

class App extends React.Component{
  
  constructor(props){
    super(props);
  }

  Login(){
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");
      const [mensagem, setMensagem] = useState("");
  }

  verificar(){
    if (email === "eduardo.lino@pucpr.br" && senha === "123456"){
      setMensagem("Acessado com sucesso!");
    }else{
      setMensagem("E-mail ou senha invalidos.")
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <div>
          <input type="email" placeholder="E-mail" value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div>
          <input></input>
        </div>

        <div>
          <button onClick={this.verificar}>Acessar</button>
        </div>
      </div>
    );
  }
}

export default App;
