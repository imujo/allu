import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Category from './8-Category'

function Categories() {

    const options={ 
        type: 'loop',
        autoWidth: true,
        drag: true,
        gap: '10px',
        rewind: true,
        perMove: 1,
        pagination: false,
        focus: 'center',
        height: "65px",
      } 

    return (
        <div className='categoriesDiv' >
            <h2>Category</h2>
            <Splide options={options} className='categoriesSplide'>
                {
                    [1,1,1,1,1,1,1].map((val, i)=>{
                        return <SplideSlide>
                            <Category />
                        </SplideSlide>
                    })
                }
            
            </Splide>

        </div>
    )
}

export default Categories
