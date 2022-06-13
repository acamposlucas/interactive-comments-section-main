import { NewCommentContainer } from "./NewCommentStyle";
import AvatarJuliusOmo from "../assets/images/avatars/image-juliusomo.png";
import data from "../data.json";

const currentUser = data.currentUser;
interface NewCommentProps {
  type: "Reply" | "Update" | "Send";
}

export function NewComment({ type }: NewCommentProps) {
  return (
    <NewCommentContainer>
      <img src={currentUser.image.png} alt={currentUser.username} />
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
