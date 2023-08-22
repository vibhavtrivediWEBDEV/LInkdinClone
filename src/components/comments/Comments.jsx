import React, { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import MessageIcon from '@mui/icons-material/Message';


const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const [newComment, setNewComment] = useState("");
  const [replying, setReplying] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      replies: [],
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      replies: [],
    },
  ]);

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }

    const newCommentObj = {
      id: comments.length + 1, // Assign a unique id for top-level comments
      desc: newComment,
      name: currentUser.name,
      userId: currentUser.id,
      profilePicture: currentUser.profilePic,
      replies: [],
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
    setReplying(false);
  };

  const handleAddReply = (commentId) => {
    
    // console.log(commentId)
    if (newComment.trim() === "") {
      return;
    }
    console.log("comment id", commentId)

    const reply = {
      id: comments.length + 1, // Assign a unique id for replies
      desc: newComment,
      name: currentUser.name,
      userId: currentUser.id,
      profilePicture: currentUser.profilePic,
    };

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply],
        };
      }
      return comment;
    });
    console.log("updated comment", updatedComments)
    setComments(updatedComments);
    setNewComment("");
    setReplying(false);
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          name="new"
          placeholder="write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        {replying ? (
          <button style={{background:'green'}} onClick={() => handleAddReply(replying)}>reply</button>
        ) : (
          <button onClick={handleAddComment}>Send</button>
        )}
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id} >
          <img src={comment.profilePicture} alt="" />
          <div style={{ display: 'flex' }}>
            <div className="info mycomments">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date parentcomtdate">1 hour ago</span>
          </div>
          <MessageIcon  style={{ float: 'right', marginTop: '-41px' }} onClick={() => setReplying(comment.id)}/>
          <p></p>
          {/* Display replies to this comment */}
          {comment.replies.map((reply) => (
            <>
              <div className="reply" key={reply.id}>
                <img src={reply.profilePicture} alt="" />
                <div className="info">
                  <span>{reply.name}</span>
                  <p>{reply.desc}</p>
                  <span> Replying to {comments.filter((a,i)=>a.id == comment.id)[0].name}</span>
                </div>
                <span className="date"  >1 hour ago</span>
              </div>
              <button style={{ float: 'right', marginTop: '-47px' }} onClick={() => setReplying(comment.id)}><MessageIcon  /></button>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Comments;
