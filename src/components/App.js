import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentData from '../data';

const App = () => {
  const [clicked, setClicked] = useState(false)

  const [comments, setComments] = useState([])

  useEffect(() => {
    setComments(CommentData);
  }, []);
  
  const handleNotificationClick = () => {
    setClicked(s => !s);
  }
  
  const markCommentSeen = (id) => {
    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        const updatedComment = {
          ...comment,
          acknowledged: !comment.acknowledged,
        };
 
        return updatedComment;
      }

      return comment;
    });
 
    setComments(newComments);
  }

  const seen = comments.filter(({ acknowledged }) => !acknowledged);
  const seenCount = seen.length;

  return (
    <div className="page">
      <div className="header">
        <div className="button-holder">
          <div className="acknowledge-count-badge fade-in" style={{display: seenCount ? '' : 'none'}}>{seenCount}</div>
          <button 
          onClick={handleNotificationClick} 
          className={`comment-button-clicked-${clicked}`}>
            <i className="fas fa-comments"></i>
          </button>
        </div>
      </div>
      <CommentList show={clicked} comments={comments} markCommentSeen={markCommentSeen}/>
    </div>
    );
  };

export default App;

