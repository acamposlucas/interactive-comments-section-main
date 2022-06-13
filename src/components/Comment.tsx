import { CommentContainer, ReplySectionContainer } from "./CommentStyle";
import { useState } from "react";
import { ReplyComment } from "./ReplyComment";

interface Reply {
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
interface CommentProps {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    replies: Reply[];
  };

  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export function Comment({ comment, currentUser }: CommentProps) {
  const [upvote, setUpvote] = useState<number>(comment.score);

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
            <img
              src={`${comment.user.image.png}`}
              alt={comment.user.username}
            />
            <h2>{comment.user.username}</h2>
            <span>{comment.createdAt}</span>
          </div>
        </header>
        <p>{comment.content}</p>
        <div className="commentUpvotes">
          <button title="Upvote" onClick={handleUpvote}></button>
          <span>{upvote}</span>
          <button title="Downvote" onClick={handleDownvote}></button>
        </div>
        <button className="replyButton">Reply</button>
      </CommentContainer>
      {comment.replies.length > 0 ? (
        <ReplySectionContainer>
          {comment.replies.map((reply) => {
            return (
              <ReplyComment
                id={reply.id}
                content={reply.content}
                createdAt={reply.createdAt}
                score={reply.score}
                replyingTo={reply.replyingTo}
                user={reply.user}
                currentUser={currentUser}
              />
            );
          })}
        </ReplySectionContainer>
      ) : null}
    </>
  );
}
