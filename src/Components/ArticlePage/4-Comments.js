import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { fetchPostComment, fetchComments } from "../../State/StateFunctions";

function Comments({
  type,
  comments,
  setfetchcommentstoggle,
  fetchcommentstoggle,
  setcomments,
  articleid,
  username,
}) {
  const [commentText, setCommentText] = useState("");

  const addComment = (e) => {
    e.preventDefault();

    console.log("Add a comment");

    fetchPostComment(type, articleid, username, commentText);

    fetchComments(setcomments, type, articleid);

    setCommentText("");

    setfetchcommentstoggle(!fetchcommentstoggle);
  };

  return (
    <div className="commentsDiv">
      <div className="commentTitleFont">Comments</div>

      <div className="commentsList">
        {comments.map((comment, i) => {
          return (
            <div key={i} className="comment">
              <div className="userIcon commentTitleFont">
                {comment.username[0]}
              </div>
              <div className="commentText commentFont">{comment.text}</div>
            </div>
          );
        })}
      </div>

      <form className="center" onSubmit={(e) => addComment(e)}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="leaveComment"
          placeholder="Comment"
        ></input>
        <button type="submit">
          <AiOutlineSend className="commentIcon" />
        </button>
      </form>
    </div>
  );
}

export default Comments;
