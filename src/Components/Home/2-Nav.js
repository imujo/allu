import Logo from '../Random/Logo'
import {BackendContext} from '../../State/BackendState'
import { useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BiMenuAltRight } from 'react-icons/bi';
import { fetchLogout } from '../../State/StateFunctions'
import { useHistory } from 'react-router-dom'

function Nav() {

    const history = useHistory();

    const {authOpenGlobal, isAuthGlobal, userGlobal} = useContext(BackendContext)
    const [, setAuthOpen] = authOpenGlobal
    const [isAuth, setIsAuth] = isAuthGlobal
    const [user , setUser] = userGlobal

    const [openMenuAnimation, setOpenMenuAmimation] = useState(false)
    const [closeMenuAnimation, setCloseMenuAnimation] = useState(false)
    const [noOfClicks, setnoOfClicks] = useState(0)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const isHamburgerMenu =useMediaQuery({
        query: '(max-width: 1000px)'
    })

    const toggleMenu = () => {
        noOfClicks % 2 === 0 ? setOpenMenuAmimation(true) : setCloseMenuAnimation(true)
        setnoOfClicks(noOfClicks+1)
    }
    const onAnimationEnd = () => {
        setOpenMenuAmimation(false)
        setCloseMenuAnimation(false)
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    

    return (
        <div className='navShadow' menuisopen={menuIsOpen.toString()} >
            <div className="navDiv" >
                {/* Logo */}
                <Logo />

                {/* Links */}

                {
                    isHamburgerMenu ?
                        <BiMenuAltRight 
                            className='menuIcon' 
                            size='25px' 
                            color='#280b38' 
                            onClick={toggleMenu} />
                    :
                        undefined
                }
                    <div className="links"
                        openmenuanimation={openMenuAnimation.toString()}
                        closemenuanimation={closeMenuAnimation.toString()}
                        menuisopen={menuIsOpen.toString()}
                        onAnimationEnd={onAnimationEnd}
                    >
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>

                        <div className="authButtons">
                            {
                                isAuth ? 
                                    <>
                                        {
                                            user.admin ?
                                                <button onClick={()=> history.push('/admin')} >Admin</button>
                                             :
                                             undefined
                                        }
                                        <button onClick={()=>fetchLogout(setIsAuth, setUser)} >Log Out</button>
                                    </>  
                                    :
                                    <>
                                        <button onClick={()=> setAuthOpen('signup')} >Sign Up</button>
                                        <button onClick={()=> setAuthOpen('login')} >Log In</button>
                                    </>
                                        
                            }
                           
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Nav
