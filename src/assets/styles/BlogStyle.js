import styled from "styled-components";

export const BlogStyle = styled.section`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
    object-fit: contain;
  }

  .b-header {
    display: flex;
    justify-content: space-between;

    .author {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      .author-img {
        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          object-fit: cover;

        }
      }

      .author-info {
        display: flex;
        flex-direction: column;
      }
    }

    .bookmark {

      display: flex;
      gap: 1rem;
    }
  }

  .blog-title {

  }

  .tag {
    display: flex;
    gap: 0.5rem;
  }

  .read {
    button {
      color: blue;
      font-weight: bold;

      &:hover {
        color: red;
        transition: 0.3ms ease-in-out;
      }
    }
  }
`