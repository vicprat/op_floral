import styled from 'styled-components';

export const Grid = styled.section`
         display: grid;
         grid-template-columns: 1fr;
         grid-gap: 20px;
         margin: 50px;
         align-items: center;
         justify-content: center;
         text-align: center;
         h6  {
           padding: 5rem;
         }
         p {
           padding: 3rem 5rem;
         }
         @media (min-width: 768px) {
           grid-template-columns: 1fr 1fr;

           > div:first-child {
             order: 2;
           }
           > div:last-child {
             order: 1;
           }
         }
       `;

export const SelectWrapper = styled.div`
  margin-top: 5rem;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Price = styled.div`
  font-family: 'Oswald', sans-serif;
  margin: 40px 0;
  color: #333 ;
  font-weight:lighter;
  font-size: 2rem;
`;

