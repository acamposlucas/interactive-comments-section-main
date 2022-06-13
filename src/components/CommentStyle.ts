import styled from "styled-components";

export const CommentContainer = styled.article`
  background-color: var(--white);
  border-radius: 8px;
  display: grid;
  gap: 1.5rem;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
  padding-block: 1rem;
  padding-inline: 1rem;
  width: min(100%, 45.625rem);

  @media (min-width: 37rem) {
    row-gap: 1rem;
    grid-template-columns: repeat(5, auto);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column: span 2;

    @media (min-width: 37rem) {
      grid-column: 2;
    }

    & .authorContainer {
      align-items: center;
      display: flex;
      gap: 1rem;
      img {
        width: 2rem;
        height: 2rem;
      }
      h2 {
        text-transform: lowercase;
        font-size: 0.9rem;
        font-weight: var(--fw-medium);
      }
      span {
        color: var(--gray-400);
      }
    }
  }

  p {
    color: var(--gray-400);
    grid-column: span 2;

    @media (min-width: 37rem) {
      grid-column: 2/5;
    }
  }

  & .commentUpvotes {
    align-items: center;
    background-color: var(--gray-100);
    border-radius: 12px;
    color: var(--blue-500);
    display: flex;
    gap: 1rem;
    font-weight: var(--fw-medium);
    padding-block: 0.75rem;
    padding-inline: 0.75rem;
    width: fit-content;

    @media (min-width: 37rem) {
      grid-column: 1;
      grid-row: 1/3;
      flex-direction: column;
      height: fit-content;
    }

    button {
      border: none;
      background-color: transparent;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    button[title="Upvote"] {
      background-image: url("src/assets/images/icon-plus.svg");
      height: 0.8rem;
      width: 0.75rem;
    }

    button[title="Downvote"] {
      background-image: url("src/assets/images/icon-minus.svg");
      height: 0.188rem;
      width: 0.75rem;
    }
  }

  & .replyButton {
    align-items: center;
    border: none;
    background-color: transparent;
    color: var(--blue-500);
    display: flex;
    gap: 0.625rem;
    font-weight: var(--fw-medium);
    font-size: 1rem;
    justify-self: end;

    @media (min-width: 37rem) {
      grid-column: 4/6;
      grid-row: 1;
    }

    &:before {
      content: "";
      background-image: url("src/assets/images/icon-reply.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      display: inline-block;
      height: 0.875rem;
      width: 0.875rem;
    }
  }
`;

export const ReplyContainer = styled.section`
  display: grid;
  gap: 1rem;
  padding-left: 1rem;
  border-left: 3px solid var(--gray-300);
`;
