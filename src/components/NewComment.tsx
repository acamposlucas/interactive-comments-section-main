import { NewCommentContainer } from "./NewCommentStyle";
import AvatarJuliusOmo from "../assets/images/avatars/image-juliusomo.png";

export function NewComment() {
  return (
    <NewCommentContainer>
      <img src={AvatarJuliusOmo} alt="Julius Omo" />
      <label htmlFor="newComment"></label>
      <textarea
        name="newComment"
        id="newComment"
        placeholder="Add a comment..."
      ></textarea>
      <button>Send</button>
    </NewCommentContainer>
  );
}
