import React from 'react'
import { BsX } from 'react-icons/bs';


function Auth({type, setAuthOpen}) {

    let title;
    let switchText;
    let switchButton;
    let switchTo;

    if (type === 'signup'){
        title = 'Sign Up'
        switchText = 'Already have an account?'
        switchButton = 'Log In'
        switchTo = 'login'
    }else{
        title = 'Log In'
        switchText = "Don't have an account?"
        switchButton = 'Sign Up'
        switchTo = 'signup'
    }

    return (
        <div className='authDiv' type={type} >
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="inputs">
                {
                    type === 'signup' ?

                    <div className="name">
                        <input type='text' name='fname' placeholder='First Name' />
                        <input type='text' name='lname' placeholder='Last Name'/>
                    </div>

                    :

                    <></>
                }
               
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />

                {
                    type === 'signup' ?

                    <input type="password" name="password" placeholder='Confirm Pasword' />
                    
                    : 

                    <></>
                }

                <input type="submit"/>
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
