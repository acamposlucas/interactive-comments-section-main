import styled from "styled-components";
import { CommentContainer } from "./CommentStyle";

export const ReplyCommentContainer = styled(CommentContainer)`
  p {
    .repliedTo {
      color: var(--blue-500);
      font-weight: var(--fw-bold);
      cursor: pointer;
    }
  }

  .userOptions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: end;

    @media (min-width: 37rem) {
      grid-column: 4/6;
      grid-row: 1;
    }

    .deleteButton {
      color: var(--red-500);
    }

    .editButton {
      color: var(--blue-500);
    }

    .deleteButton,
    .editButton {
      border: none;
      background-color: transparent;
      display: flex;
      gap: 0.625rem;
      font-weight: var(--fw-medium);
      font-size: 1rem;
      justify-self: end;

      &:before {
        content: "";
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        height: 0.875rem;
        width: 0.875rem;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    .deleteButton {
      &:before {
        background-image: url("src/assets/images/icon-delete.svg");
      }
    }

    .editButton {
      background-repeat: no-repeat;
      background-image: url("src/assets/images/icon-edit.svg");
    }
  }
`;
