import './Comment.css';

import React from 'react';

export default ({ id, userName, userComment, date, onRemove }) => {
  return (
    <div key={id} className="card" >
      <div className="card-header user-header">
        <h4>{userName}</h4>
        <div className="date">{date}</div>
      </div>
      <div className="card-body container">
        <div className="user-comment">
          {userComment}
        </div>
        <div>
          <div className="button-delete">
            <button className="btn btn-toolbar" onClick={onRemove(id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>);
}