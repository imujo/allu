import React, { useContext } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Flag from './Flag'
import {BackendContext} from '../../State/BackendState'

function Header() {

    const options={ 
        type: 'loop',
        autoWidth: true,
        drag: true,
        gap: '40px',
        rewind: true,
        perMove: 1,
        pagination: false,
        focus: 'center',
        start: 4,
        height: "auto",

    } 
    
    const {languagesGlobal, languageSelectedGlobal} = useContext(BackendContext);
    const [languages,] = languagesGlobal
    const [languageSelected, ] = languageSelectedGlobal;

      

    return (
        <div className='headerDiv'>
            
            {/* Title div */}
            <div className="titleDiv">
                <div className="backgroundImage">
                    <h2 className='welcome'>Welcome to</h2>
                    <h1>All U</h1>
                    <h2>Learn English, Spanish, German, French and more all in one place for free. Join our community and help others become proficient in any language!</h2>
                </div>
            </div>


            {/* Select Language div */}
            <div className="selectLanguageDiv">
                <h3>Select a language:</h3>
                
                <Splide options={options}>
                    {
                        languages.map((language, i)=>{
                            return <SplideSlide className='slide' key={i}>
                                
                                <Flag language={language} />
                            </SplideSlide>
                        })
                    }
                </Splide>
               
                
            </div>


            {/* Image Div */}
            <div className="imageDiv">
                <div className="purpleBlock"></div>
                <img className="image" alt='countrySelected' src={`${languageSelected.imageurl}`} />
            </div>

        </div>
    )
}

export default Header
