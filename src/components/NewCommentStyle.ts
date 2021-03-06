import styled from "styled-components";

export const NewCommentContainer = styled.div`
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, auto);
  margin-top: 1rem;
  padding-block: 0.875rem;
  padding-inline: 1rem;
  width: min(100%, 45.625rem);

  @media (min-width: 37rem) {
    grid-template-columns: max-content auto max-content;
    align-items: flex-start;
  }

  img {
    height: 2rem;
    width: 2rem;
    grid-row: 3;

    @media (min-width: 37rem) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  textarea {
    border: 1px solid var(--gray-400);
    border-radius: 6px;
    grid-column: 1/3;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    outline: none;
    min-height: 6rem;
    width: 100%;
    resize: none;

    @media (min-width: 37rem) {
      grid-column: 2;
      grid-row: 1;
    }
  }

  button {
    background-color: var(--blue-500);
    border: none;
    border-radius: 8px;
    color: var(--white);
    font-weight: var(--fw-bold);
    justify-self: end;
    padding-block: 0.8rem;
    padding-inline: 1.5rem;
    max-width: 6.5rem;
    text-transform: uppercase;

    @media (min-width: 37rem) {
      grid-column: 3;
      grid-row: 1;
    }
  }
`;
