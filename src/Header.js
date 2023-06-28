import { useContext, useEffect} from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"

function Header() {

    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;

     useEffect(() => {
         fetch('http://localhost:4000/profile', {
             credentials: 'include',
         }).then(response => {
             response.json().then(userInfo => {
                 setUserInfo(userInfo);
                })
            })
        }, [])

    function loggout() {
        fetch('http://localhost:4000/loggout', {
            credentials: 'include',
            method: 'POST'
         })
         setUserInfo(null)
     }
     return (
         <header>
        <Link to="/">MyBlog</Link>
             <nav>
                 {username && (
                     <>
                         <Link to='/create'>Criar Post</Link>
                         <button onClick={loggout}>Sair</button>
                     </>
                 )}
                 
                    {!username && (
                     <>
                       <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                     </>
                    )}
                 
        </nav>
         </header>
      
         )
}
export default Header