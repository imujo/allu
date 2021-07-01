export const fetchLanguages = (setlanguages) => {
    fetch('http://localhost:9000/api/languages')
            .then(res => res.json())
            .then(data => setlanguages(data))
}

export const fetchArticles = (setarticles) => {
    fetch('http://localhost:9000/api/articles')
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

export const currentTimeToTime = (currentTime, setTime) => {
    currentTime = parseInt(currentTime)
    const minutes = parseInt(currentTime / 60)
    const seconds = parseInt(currentTime % 60)
    const returningSeconds = seconds < 10 ? `0${seconds}` : seconds
    const returningMinutes = minutes < 10 ? `0${minutes}` : minutes
    const time = `${returningMinutes}:${returningSeconds}`
    setTime(time)
}

export const currentTimeToPercentage = (audioRef) => {
    const trackPercenrage = audioRef.current.currentTime / audioRef.current.duration * 100
    return(trackPercenrage)
}
