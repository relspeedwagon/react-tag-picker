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
  &:hover {
    cursor: pointer;
  }
`;

const TagDiv = (props) => {
  return (
    <Container>
      <input onChange={props.onChange} type="checkbox" checked={props.isChecked} name={props.tagName} id={props.id}></input>
      <h3> {props.tagName} </h3>
    </Container>
  )
}

export default TagDiv;