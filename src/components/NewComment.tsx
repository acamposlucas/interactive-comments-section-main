import { NewCommentContainer } from "./NewCommentStyle";
import AvatarJuliusOmo from "../assets/images/avatars/image-juliusomo.png";

export function NewComment() {
  return (
    <NewCommentContainer>
      <label htmlFor="newComment"></label>
      <textarea
        name="newComment"
        id="newComment"
        placeholder="Add a comment..."
      ></textarea>
      <img src={AvatarJuliusOmo} alt="Julius Omo" />
      <button>Send</button>
    </NewCommentContainer>
  );
}
