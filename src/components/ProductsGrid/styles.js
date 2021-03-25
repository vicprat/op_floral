import styled from 'styled-components';

export const ProducstGridWrapper = styled.section`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;

  @media (min-width: 384px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
