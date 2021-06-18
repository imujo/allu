import React from 'react'

function Comments() {
    return (
    <div className='commentsDiv' >
            <div className='commentTitleFont'>Comments</div>
            <div className="commentsList">
                {
                    [1,1,1,1,1,1,1].map((value, i)=>{
                        return (
                            <div className="comment">
                            <div className="userIcon commentTitleFont">A</div>
                            <div className="commentText commentFont">This is great</div>
                        </div>
                        )
                    })
                }
               

            </div>
            <div className='center'>
                <input type='text' className="leaveComment" placeholder='Comment'></input>
            </div>
        </div>
    )
}

export default Comments
