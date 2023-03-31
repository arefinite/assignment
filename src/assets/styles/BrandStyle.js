import styled from "styled-components";

export const BrandStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  div:nth-child(1) {
    font-size: 2rem
  }

  div:nth-child(2) img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-position: top;
  }
`