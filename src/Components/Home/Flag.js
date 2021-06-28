
function Flag({language, languageSelected}) {

    return (
        <div className='flagDiv'>
            <img 
                className="flag" 
                onClick={()=> languageSelected(language)}
                src={`http://localhost:9000/flags/${language}.png`}  
                alt='flag' />
            <h4 className='countryName'>{language}</h4>
        </div>
    )
}

export default Flag
