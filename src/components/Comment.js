import React from 'react';
import '../comments.css'
import TimeAgo from 'react-timeago'

const Comment = ({ comment, markCommentSeen }) => {
  const { 
    body, 
    id, 
    acknowledged, 
    dates: { created: { date_time } },
    user: { full_name, image: { thumb_url } },
  } = comment


  return (
    <div className="comment" >
      <img className="comment-user-photo" alt="profile" src={thumb_url}/>
      <div className="comment-content">
        <div className="comment-username">{full_name}</div>
        <div>{body}</div>
        <div className="time-and-seen-button">
          <div className="comment-timestamp"><TimeAgo date={date_time} /></div>
          <button className="seen-button" onClick={() => markCommentSeen(id)} style={{display: acknowledged ? 'none' : ''}}>Mark as Seen</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;