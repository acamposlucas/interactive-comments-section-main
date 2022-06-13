import { useState } from "react";
import { CommentSection, GlobalStyle } from "./styles/global";
import { Comment } from "./components/Comment";
import { NewComment } from "./components/NewComment";
import data from "./data.json";

function App() {
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState(data.comments);

  return (
    <>
      <GlobalStyle />
      <CommentSection>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
            />
          );
        })}
      </CommentSection>
      <NewComment type="Send" />
    </>
  );
}

export default App;
