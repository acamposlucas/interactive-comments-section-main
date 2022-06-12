import { CommentContainer } from "./CommentStyle";
import { useState } from "react";

interface CommentProps {
  content: string;
  createdAt: string;
  score: number;
  image: string;
  username: string;
}

export function Comment({
  content,
  createdAt,
  score,
  image,
  username,
}: CommentProps) {
  const [upvote, setUpvote] = useState<number>(score);

  function handleUpvote() {
    setUpvote((prevState) => prevState + 1);
  }

  function handleDownvote() {
    setUpvote((prevState) => prevState - 1);
  }

  return (
    <>
      <CommentContainer>
        <header>
          <div className="authorContainer">
            <img src={`${image}`} alt={username} />
            <h2>{username}</h2>
            <span>{createdAt}</span>
          </div>
        </header>
        <p>{content}</p>
        <div className="commentUpvotes">
          <button title="Upvote" onClick={handleUpvote}></button>
          <span>{upvote}</span>
          <button title="Downvote" onClick={handleDownvote}></button>
        </div>
        <button className="replyButton">Reply</button>
      </CommentContainer>
    </>
  );
}
