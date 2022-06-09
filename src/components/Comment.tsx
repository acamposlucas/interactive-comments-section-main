import { CommentContainer } from "./CommentStyle";
import AvatarAmyRobson from "../assets/images/avatars/image-amyrobson.png";

export function Comment() {
  return (
    <CommentContainer>
      <header>
        <div className="authorContainer">
          <img src={AvatarAmyRobson} alt="Amy Robson" />
          <h2>amyrobson</h2>
          <span>1 month ago</span>
        </div>
      </header>
      <p>
        "Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well."
      </p>
      <div className="commentUpvotes">
        <button title="Upvote"></button>
        <span>12</span>
        <button title="Downvote"></button>
      </div>
      <button className="replyButton">Reply</button>
    </CommentContainer>
  );
}
