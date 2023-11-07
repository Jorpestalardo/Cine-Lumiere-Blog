import {useState} from 'react'
import * as authService from '../services/auth.services'

function LoginPage({onLogin}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    function onSubmit(event){
        event.preventDefault()
        authService.login(email, password)
        .then(({user, token}) =>{
            onLogin(user, token)
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='regisTitle text-center m-5'><span className="lanz">Lo</span>gin</h1>
            <form className="regis d-flex flex-column" onSubmit={onSubmit}>
                <p>{error}</p>
                <label  className="m-1 fs-5">E-Mail: </label>
                <input  className="inpu" type="text"  onChange={onChangeEmail} value={email} />

                <label  className="m-1 fs-5">Contraseña: </label>
                <input type="password"  className="inpu" onChange={onChangePassword} value={password} />  
                

                <button  className="btn btn-warning m-5" >Ingresar</button>
            </form>
        </div>)           
}


export default LoginPage