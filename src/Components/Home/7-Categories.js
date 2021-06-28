import React, { useContext } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Category from './8-Category'
import {BackendContext} from '../../State/BackendState'

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

      const {categoriesGlobal} = useContext(BackendContext)
      const [categories, ] = categoriesGlobal

    return (
        <div className='categoriesDiv' >
            <h2>Category</h2>
            <Splide options={options} className='categoriesSplide'>
                {
                    categories.map((category, i)=>{
                        return <SplideSlide key={i} >
                            <Category category={category} />
                        </SplideSlide>
                    })
                }
            
            </Splide>

        </div>
    )
}

export default Categories
