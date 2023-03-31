import styled from "styled-components";

export const MediaControlStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }

  MainContent {
    display: none;
  }
`