export const fetchLanguages = (setlanguages) => {
    fetch('http://localhost:9000/api/languages')
            .then(res => res.json())
            .then(data => setlanguages(data))
}

export const fetchArticles = (setarticles, type) => {
    fetch(`http://localhost:9000/api/${type}Articles`)
        .then(res => res.json())
        .then(data => setarticles(data))
}


export const fetchCategories = (setcategories) => {
    fetch('http://localhost:9000/api/categories')
    .then(res => res.json())
    .then(data => setcategories(data))
}

export const fetchArticle = (setarticleData, id) => {
    fetch(`http://localhost:9000/api/article/${id}`)
    .then(res => res.json())
    .then(data => setarticleData(data))
}

export const onClickLoadMore = (filteredArticles, loadedArticles, setLoadedArticles) => {
    if (filteredArticles.length > (loadedArticles + 9)){
        return setLoadedArticles(loadedArticles + 9)
    }
    setLoadedArticles(loadedArticles + (filteredArticles.length - loadedArticles))
}