import React, { useContext, useState } from 'react'
import { BsX } from 'react-icons/bs';
import { fetchAuth } from '../../State/StateFunctions'
import { BackendContext } from '../../State/BackendState'


function Auth({type, setAuthOpen}) {

    let title;
    let switchText;
    let switchButton;
    let switchTo;
    let action;

    if (type === 'signup'){
        title = 'Sign Up'
        switchText = 'Already have an account?'
        switchButton = 'Log In'
        switchTo = 'login'
        action ='register'
    }else{
        title = 'Log In'
        switchText = "Don't have an account?"
        switchButton = 'Sign Up'
        switchTo = 'signup'
        action = 'login'
    }

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    const {userGlobal, isAuthGlobal} = useContext(BackendContext)
    const [, setUser] = userGlobal
    const [, setIsAuth] = isAuthGlobal

    const onSubmit = (e) => {
        e.preventDefault()        

        const body = {
            username: username,
            email: email,
            password: password
        }
       

        fetchAuth(action, body, setErrorMessage, setIsAuth, setUser)
        
    }

    const setErrorMessage = (msg) => {

        if (msg.status === 200){
            setMessageType('success')
            setMessage(msg.msg)
            setTimeout(()=>{
                setMessage('')
                setAuthOpen('')
            }, 1000)
        }else if(msg.status === 400){
            setMessageType('error')
            setMessage(msg.msg)
            setTimeout(()=>setMessage(''), 5000)
        }




    }
    
    
    
    return (
        <div className='authDiv' type={type} >
            <div className="title">
                <h1>{title}</h1>
            </div>

            <form className="inputs" onSubmit={e=>onSubmit(e)}>
                {
                    type === 'signup' ?

                        <input type="text" required  maxLength='30'  name="username" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />

                    :

                    <></>
                }
               
                <input type="email" required name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" required minLength="6" maxLength='30' name='password' id='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />


                <input type="submit"/>
            </form>

            <div className="message ">
                <p className={`${messageType}Font`} >{message}</p>
            </div>

            <div className="switch">
                <p className='switchAuthFont'>{switchText}</p>
                <p onClick={()=> setAuthOpen(switchTo)} className='switchAuthFont bold'> {switchButton} </p>
            </div>

            <BsX onClick={()=> setAuthOpen('')} className='exit' />
        </div>
    )
}

export default Auth
