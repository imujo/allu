import Logo from '../Random/Logo'

function Nav() {


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
                        <button>Sign Up</button>
                        <button>Log In</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Nav
