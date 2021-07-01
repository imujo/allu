import Logo from '../Random/Logo'
import {BackendContext} from '../../State/BackendState'
import { useContext } from 'react'

function Nav() {

    const {authOpenGlobal} = useContext(BackendContext)
    const [, setAuthOpen] = authOpenGlobal

    return (
        <div className='navShadow' >
            <div className="navDiv">
                {/* Logo */}
                <Logo />

                {/* Links */}
                <div className="links">
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <div className="authButtons">
                        <button onClick={()=> setAuthOpen('signup')} >Sign Up</button>
                        <button onClick={()=> setAuthOpen('login')} >Log In</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Nav
