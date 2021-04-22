import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
    `;
  }
};

export const Button = styled.button`
 /* outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: 1px solid black;  
  white-space: nowrap;
  ${fullWidthStyles}

  &:hover:not(:disabled) {
    color: white;
    background: black;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999; */ 
  margin-left: 2.5rem;
  display: block;
  height: 44px;
  margin: 5px 10px;
  line-height: 40px;
  font-size: 1.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  background: none;
  border: 1px solid #ccc;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: 0.3s cubic-bezier(.07,.47,.84,.72);
  white-space: nowrap;
  ${fullWidthStyles}
  &:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #23D997;
  z-index: -1;
  transition: 0.3s cubic-bezier(.07,.47,.84,.72);
}
&:hover {
    color: white;
    border: 1px solid #23D997;
  }
&:hover:after{
  width: 100%;
}
    
    `;
