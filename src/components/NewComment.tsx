import { NewCommentContainer } from "./NewCommentStyle";
import AvatarJuliusOmo from "../assets/images/avatars/image-juliusomo.png";

interface NewCommentProps {
  type: "Reply" | "Update" | "Send";
}

export function NewComment({ type }: NewCommentProps) {
  return (
    <NewCommentContainer>
      <img src={AvatarJuliusOmo} alt="Julius Omo" />
      <label htmlFor="newComment"></label>
      <textarea
        name="newComment"
        id="newComment"
        placeholder="Add a comment..."
      ></textarea>
      <button>{type}</button>
    </NewCommentContainer>
  );
}
