import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
}))`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 1rem 0;
  h3 {
    margin: 0;
  }
`;

const TagDiv = (props) => {
  return (
    <Container>
      <input type="checkbox"></input>
      <h3> {props.tagName} </h3>
    </Container>
  )
}

export default TagDiv;