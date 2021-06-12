import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

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
        start: 2,
        height: "auto",

      } 

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
                        [1,2,3,4,5,6,7,8,9,10].map((val, i)=>{
                            return <SplideSlide className='slide'>
                                <div className="flag"></div>
                                <h4 className='countryName'>Croatia</h4>
                            </SplideSlide>
                        })
                    }
                </Splide>
            </div>


            {/* Image Div */}
            <div className="imageDiv">
                <div className="purpleBlock"></div>
                <div className="image"></div>
            </div>

        </div>
    )
}

export default Header
