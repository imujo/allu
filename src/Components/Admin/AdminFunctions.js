const createGroup = (list) => {
    let group = []
    list.forEach((listElement, i)=>{
        group.push({
            id: listElement,
            name: listElement
        })
        
    })
    console.log(group)
    return group
}

export const getCategoriesAndLanguages = (setCategories, setLanguages) => {
    fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/categories`)
            .then(res => res.json())
            .then(data => setCategories(createGroup(data)))

        fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/languages`)
            .then(res => res.json())
            .then(data => setLanguages(createGroup(data)))
}

export const getDirItems = (setDirItems, dir) => {
    fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/listDir/${dir}`)
            .then(res => res.json())
            .then(data => setDirItems(createGroup(data)))

}