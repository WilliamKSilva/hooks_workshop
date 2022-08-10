import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
`;

export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 2rem;
    color: white;
  }
  
  span {
    font-size: 1.8rem;
    color: var(--primary);
  }
`;