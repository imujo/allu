import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';


function Comments() {
    return (
        <div className='commentsDiv' >
            <div className='commentTitleFont'>Comments</div>

                <div className="commentsList">
                    {
                        [1,1,1,1,1,1,1].map((value, i)=>{
                            return (
                                <div key={i} className="comment">
                                    <div className="userIcon commentTitleFont">A</div>
                                    <div className="commentText commentFont">This is great</div>
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
