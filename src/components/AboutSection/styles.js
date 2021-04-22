import styled from 'styled-components';

export const About = styled.div`
  display: flex;
  min-height: 90vh;
  padding: 5rem 4rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
