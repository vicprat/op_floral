import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  article {
    position: relative;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    height: 50vh;
    min-height: 0;
    max-height: none;
    .major {
      display: block;
      color: white;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      position: absolute;
      padding: 5rem;
      text-decoration: none;
      text-align: center;
      p {
        padding-top: 5rem;
        font-weight: lighter;
      }
    }
  }
`;
