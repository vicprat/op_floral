import styled from 'styled-components';

export const ProducstGridWrapper = styled.section`
         
         display: grid;
         grid-gap: 10px;
         grid-template-columns: 1fr;
         text-align: center;

         @media (min-width: 384px) {
         
           grid-template-columns: repeat(1, 1fr);
         }
         @media (min-width: 768px) {
           grid-template-columns: repeat(2, 1fr);
         }
         @media (min-width: 1024px) {
           grid-template-columns: repeat(3, 1fr);
         }
       `;
