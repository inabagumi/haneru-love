import styled from 'styled-components'

const IconButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-width: 0;
  border-radius: 50%;
  color: inherit;
  display: flex;
  font-size: inherit;
  height: 1.5em;
  justify-content: center;
  margin: 0 0 0 auto;
  padding: 0;
  transition: background-color 0.2s ease;
  width: 1.5em;

  :focus {
    box-shadow: ${(props) => props.theme.palette.primary} 0 0 0 2px;
    outline: 0;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export default IconButton
