import React from "react";

class App extends React.Component{
  
  constructor(props){
    super(props);

  }

  verificar(){

  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <div>
          <input></input>
          <input></input>
          <button onClick={this.verificar}>Acessar</button>
        </div>
        
      </div>
    );
  }
}

export default App;
