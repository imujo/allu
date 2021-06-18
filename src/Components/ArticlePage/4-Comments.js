import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';


function Comments() {
    return (
        <div className='commentsDiv' >
            <div className='commentTitleFont'>Comments</div>
            <Scrollbars style={{ width: "100%", height: "100%" }}>

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
            </Scrollbars>

            <div className='center'>
                <input type='text' className="leaveComment" placeholder='Comment'></input>
            </div>
        </div>
   
    )
}

export default Comments
