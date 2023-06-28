import { useState } from "react"

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('Registro bem sucedido')
        } else {
            alert('Registro Falhou, usuário ou senha já existem')
        }
    }
  return (
      <form className="register" onSubmit={register}>
          <h1>Registrar</h1>
          <input type="text" placeholder="usuário"
              value={username}
              onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="senha"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          <button>Registrar</button>
    </form>
  )
}
export default Register