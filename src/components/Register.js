import { useState } from "react"

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault();
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {'Content-Type': 'application/json'},
        })
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