export const fetchLanguages = (setlanguages) => {
    fetch('http://localhost:9000/languages')
            .then(res => res.json())
            .then(data => setlanguages(data))
}

export const fetchArticles = (setarticles) => {
    fetch('http://localhost:9000/articles')
        .then(res => res.json())
        .then(data => setarticles(data))
}

export const fetchCategories = (setcategories) => {
    fetch('http://localhost:9000/categories')
    .then(res => res.json())
    .then(data => setcategories(data))
}

