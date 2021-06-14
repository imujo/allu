import React from 'react'

function Article() {
    return (
        <div className='articleDiv'>
            <img src={'https://images.unsplash.com/photo-1623596627036-3c780c32acc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} alt="articleImage" className='articleImage' />
            <div className="imageOverlay"></div>

            <div className="categoryImageFont articleCategory">Category</div>

            <div className="articleText">
                <h6>Article Title</h6>
                <div className="oneLinerFont oneLiner">One-Liner</div>
            </div>
        </div>
    )
}

export default Article
