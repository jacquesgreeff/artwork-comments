import Comment from './Comment';
import React from 'react';
import '../comments.css'


const CommentList = ({ show, comments, markCommentSeen }) => {
  const commentListShow = show

const renderedList = comments.map (comment => {
  return <Comment comment={comment} key={comment.id} markCommentSeen={markCommentSeen}/>
});

  return (
    <div className={`comment-list-show-${commentListShow}`}>
      {renderedList}
      <button className="approval-button">Mark as Approved</button>
    </div>
  )
}


export default CommentList;
