import { CommentSection, GlobalStyle } from "./styles/global";
import { Comment } from "./components/Comment";
import { NewComment } from "./components/NewComment";
import data from "../data.json";

const comments = data.comments;
console.log(comments);

function App() {
  return (
    <>
      <GlobalStyle />
      <CommentSection>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              image={comment.user.image.png}
              username={comment.user.username}
            />
          );
        })}
      </CommentSection>
      <NewComment type="Send" />
    </>
  );
}

export default App;
