import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  color: props.color || "#FFFFFF",
  background: props.background || "#179F9E",
}))`
  width: fit-content;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5rem 0.9rem;
  svg {
    color: ${(props) => props.color};
    margin-right: 1.5rem;
  }
`;
export default Button;
