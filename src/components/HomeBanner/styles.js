import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CarouselWrapper = styled.div`
                .title {
                  padding: 1rem;
                }
                .description {
                  padding: 1rem;
                  p {
                    margin: 1rem;
                    font-weight: 200;
                  }
                  > ${StyledLink} {
                    margin-top: 3rem;
                    font-weight: 200;
                    color: white;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                    &:hover {
                      color: #23d997;
                      text-decoration: underline;
                    }
                  }
                }
              `;
