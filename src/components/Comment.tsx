import { CommentContainer, ReplyContainer } from "./CommentStyle";
import { useState } from "react";

type ReplyProps = {
  id?: number;
  content?: string;
  createdAt?: string;
  score?: number;
  replyingTo?: string;
  user?: {
    image: {
      png: string;
    };
  };
  username?: string;
};
interface CommentProps extends ReplyProps {
  content: string;
  createdAt: string;
  score: number;
  image: string;
  username: string;
  replies: ReplyProps[];
}

export function Comment({
  content,
  createdAt,
  score,
  image,
  username,
  replies,
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
      {replies.length > 0 ? (
        <ReplyContainer>
          {replies.map((reply) => {
            return (
              <CommentContainer>
                <header>
                  <div className="authorContainer">
                    <img src={`${reply.user?.image}`} alt={reply.username} />
                    <h2>{reply.username}</h2>
                    <span>{reply.createdAt}</span>
                  </div>
                </header>
                <p>{reply.content}</p>
                <div className="commentUpvotes">
                  <button title="Upvote" onClick={handleUpvote}></button>
                  <span>{reply.score}</span>
                  <button title="Downvote" onClick={handleDownvote}></button>
                </div>
                <button className="replyButton">Reply</button>
              </CommentContainer>
            );
          })}
        </ReplyContainer>
      ) : null}
    </>
  );
}
