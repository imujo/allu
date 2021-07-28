import React, { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Stats from "./3-Stats";
import Comments from "./4-Comments";
import { fetchPostLike, fetchComments } from "../../State/StateFunctions";
import { BackendContext } from "../../State/BackendState";

function ArticleHeader({
  title,
  clicks,
  created_by,
  likes,
  category,
  liked,
  setliked,
  articleid,
  type,
}) {
  const { userGlobal, isAuthGlobal } = useContext(BackendContext);
  const [user] = userGlobal;
  const [isAuth] = isAuthGlobal;

  const [comments, setComments] = useState([]);
  const [fetchCommentsToggle, setFetchCommentsToggle] = useState(false);

  useEffect(() => {
    fetchComments(setComments, type, articleid);
  }, [type, articleid, fetchCommentsToggle]);

  const [newTitle, setNewTitle] = useState("");
  useEffect(() => {
    if (title) {
      if (title.length > 10) {
        console.log(title.length);
        setNewTitle(`${title.substring(0, 20)}...`);
      }
    }
  }, [title]);

  return (
    <div className="articleHeaderDiv">
      <div className="articlePageTitleSection">
        <h1>{newTitle}</h1>
        <div className="user">
          <h2>by {created_by}</h2>
          <div
            className="like"
            onClick={
              isAuth
                ? () => fetchPostLike(type, articleid, user.id, setliked, liked)
                : undefined
            }
          >
            {liked ? (
              <AiFillHeart className="like" color="#837e9f" />
            ) : (
              <AiOutlineHeart className="like" color="#837e9f" />
            )}
          </div>
        </div>
      </div>

      <div className="articleStatsSection">
        <Stats clicks={clicks} comments={comments} likes={likes} />
      </div>
      <div className="comments">
        <Comments
          comments={comments}
          setcomments={setComments}
          type={type}
          articleid={articleid}
          username={user.username}
          setfetchcommentstoggle={setFetchCommentsToggle}
          fetchcommentstoggle={fetchCommentsToggle}
        />
      </div>
      <div className="articlePageImageSection">
        <img
          alt="articleImage"
          src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryImages/${category.imagefile}`}
          className="articlePageImage"
        />
      </div>
    </div>
  );
}

export default ArticleHeader;
