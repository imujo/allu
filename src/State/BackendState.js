import React, {useState, createContext, useEffect} from 'react'
import {fetchLanguages, fetchArticles, fetchCategories} from './StateFunctions'

const BackendContext = createContext();

const BackendContextProvider = (props) => {

    // LANGUAGES
    const [languageSelected, setlanguageSelected] = useState('none')
    const [languages, setlanguages] = useState([])


    useEffect(() => {
        fetchLanguages(setlanguages)
    }, [])


    // ARTICLES
    const [articles, setarticles] = useState([])

    useEffect(() => {
        fetchArticles(setarticles)
    }, [])


    // TABS 
    const [tabSelected, settabSelected] = useState('read')

    // CATEGORIES

    const [categories, setcategories] = useState([])
    const [selectedCategory, setselectedCategory] = useState('')

    useEffect(() => {
        fetchCategories(setcategories)
    }, [])

    // SEARCH
    const [search, setsearch] = useState('')

    let filteredArticles = articles.filter(article =>{

        const filter = article.title.toLowerCase().includes(search.toLowerCase()) && article.type === tabSelected && (article.category === selectedCategory || selectedCategory === '') && (article.language === languageSelected || languageSelected === 'none')
        return filter
    })

    // AUTH
    const [authOpen, setauthOpen] = useState('')

    

    return(
        <BackendContext.Provider value={{

            languagesGlobal:[languages, setlanguages],
            languageSelectedGlobal: [languageSelected, setlanguageSelected],
            
            articlesGlobal: [articles, setarticles],

            tabSelectedGlobal: [tabSelected, settabSelected],

            categoriesGlobal: [categories, setcategories],
            selectedCategoryGlobal: [selectedCategory, setselectedCategory],

            searchGlobal: [search, setsearch],
            filteredArticles: filteredArticles,

            authOpenGlobal: [authOpen, setauthOpen],




        }} >
            {props.children}
        </BackendContext.Provider>
    )
}

export {BackendContextProvider, BackendContext};
