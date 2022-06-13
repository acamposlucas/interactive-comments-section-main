import { useState } from "react";
import { ReplyCommentContainer } from "./ReplyCommentStyle";

interface CurrentUser {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}
interface ReplyProps extends CurrentUser {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export function ReplyComment({
  currentUser,
  content,
  createdAt,
  score,
  replyingTo,
  user,
}: ReplyProps) {
  const [upvote, setUpvote] = useState<number>(score);

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
          <img src={user.image.png} alt={user.username} />
          <h2>{user.username}</h2>
          <span>{createdAt}</span>
        </div>
      </header>
      <p>
        {" "}
        <span className="repliedTo">@{replyingTo} </span>
        {content}
      </p>
      <div className="commentUpvotes">
        <button title="Upvote" onClick={handleUpvote}></button>
        <span>{upvote}</span>
        <button title="Downvote" onClick={handleDownvote}></button>
      </div>
      {currentUser.username === user.username ? (
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
