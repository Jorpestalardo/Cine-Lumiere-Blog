import {useState, useEffect} from 'react'
import * as userServices from '../services/user.service.js'
// import * as middlewareAuth from '../../../middleware/auth.middleware.js'
import { useParams, Link } from "react-router-dom"



function UserProfile () {
    const {id} = useParams()

    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        middlewareAuth.getUser()
        .then(data => {
            setUser(data)
        })
    }, [id])

    function changeName(e)  {
        setName(e.target.value)
    }    

    function changePassword(e)  {
        setPassword(e.target.value)
    }    

    function changeEmail(e)  {
        setEmail(e.target.value)
    }    


    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    )

}

export default UserProfile