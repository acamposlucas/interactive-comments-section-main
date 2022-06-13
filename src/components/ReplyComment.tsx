import { useState } from "react";
import { ReplyCommentContainer } from "./ReplyCommentStyle";

export function ReplyComment() {
  const [upvote, setUpvote] = useState<number>(0);

  function handleUpvote() {
    setUpvote((prevState) => prevState + 1);
  }

  function handleDownvote() {
    setUpvote((prevState) => prevState - 1);
  }
  return (
    <ReplyCommentContainer>
      <header>
        <div className="authorContainer">
          <img src="https://github.com/acamposlucas.png" alt="" />
          <h2>lucas</h2>
          <span>1 month ago</span>
        </div>
      </header>
      <p>
        {" "}
        <span className="repliedTo">@repliedTo </span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis cum iusto
        corrupti porro vero. Dolores vitae necessitatibus possimus, quisquam sit
        similique corrupti voluptatem autem numquam explicabo vero fugiat
        placeat repellendus.
      </p>
      <div className="commentUpvotes">
        <button title="Upvote" onClick={handleUpvote}></button>
        <span>{upvote}</span>
        <button title="Downvote" onClick={handleDownvote}></button>
      </div>
      {true ? (
        <div className="userOptions">
          <button className="deleteButton">Delete</button>
          <button className="editButton">Edit</button>
        </div>
      ) : (
        <button className="replyButton">Reply</button>
      )}
    </ReplyCommentContainer>
  );
}
