import React from "react";

const CommentTitle = ({ item }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>{item.text}</div>
      <div>
        <small class="text-muted">
          <i>by {item.author}</i>
        </small>
      </div>
    </div>
  );
};

export default CommentTitle;
