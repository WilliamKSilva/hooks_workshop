import styled from "styled-components";

export const Wrapper = styled.button`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--primary);
  border-radius: 20px;
  transition: 0.2s;
  padding: 0.5rem;

  strong {
    color: black;
    font-size: 1.2rem;
  }

  &:hover {
    filter: brightness(0.5);
  }
`;