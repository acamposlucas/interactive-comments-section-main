import { GlobalStyle } from "./styles/global";
import { Comment } from "./components/Comment";
import { NewComment } from "./components/NewComment";

function App() {
  return (
    <>
      <GlobalStyle />
      <Comment />
      <NewComment />
    </>
  );
}

export default App;
