import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;  
  flex-direction: row;
  padding-top: 5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 5rem;
  gap: 2rem;

  strong {
    font-size: 1.4rem;
    text-decoration: underline;
    color: var(--primary);

    &:hover {
      cursor: pointer;
    }
  }
`;