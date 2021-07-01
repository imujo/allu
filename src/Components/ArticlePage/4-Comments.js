import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';


function Comments({comments}) {
    return (
        <div className='commentsDiv' >
            <div className='commentTitleFont'>Comments</div>

                <div className="commentsList">
                    {
                        comments.map((comment, i)=>{
                            return (
                                <div key={i} className="comment">
                                    <div className="userIcon commentTitleFont">{comment.user[0]}</div>
                                    <div className="commentText commentFont">{comment.message}</div>
                                </div>
                            )
                        })
                    }
                    

                </div>

            <div className='center'>
                <input type='text' className="leaveComment" placeholder='Comment'></input>
                <AiOutlineSend className='commentIcon' />
            </div>
        </div>
   
    )
}

export default Comments
