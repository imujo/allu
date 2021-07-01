import { useContext, useEffect, useState } from "react"
import {BackendContext} from '../../State/BackendState'

function Flag({language}) {
    const [select, setselect] = useState('notselected')

    const {languageSelectedGlobal} = useContext(BackendContext)
    const [languageSelected, setlanguageSelected] = languageSelectedGlobal

    useEffect(() => {
        if (languageSelected === language){
            setselect('selectedLanguage')
        }else{
            setselect('notselected')
        }
    }, [languageSelected, language])

    const onFlagClick = () => {
        if (language === languageSelected){
            setlanguageSelected('none')
        }else{
            setlanguageSelected(language)
        }
    }

    return (
        <div className={`flagDiv ${select}`}>
            <img 
                className="flag" 
                onClick={onFlagClick}
                src={`http://localhost:9000/flags/${language}.png`}  
                alt='flag' />
            <h4 className='countryName'>{language}</h4>
        </div>
    )
}

export default Flag
