
import React, { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de validação pode ser implementada aqui
    if (username === "admin" && password === "1234") {
      setMessage("Login realizado com sucesso!");
    } else {
      setMessage("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className="container">
      <div className="image-container"> 
        <img id="logo" src="/imagem01.jpg" alt="Imagem Descritiva" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <a href="/Recupera-senha">Esqueceu a senha?</a>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;

