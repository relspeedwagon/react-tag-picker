import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
}))`
background-color: #ECEEF5;
border: 0.5px solid #F7F7FB;
border-radius: 500px;
width: fit-content;
display: flex;
flex-direction: row;
align-items: center;
margin: 1rem 2.5rem;
padding: .4rem 1rem;
  h3 {
    font-weight: 500;
    margin: 0 0 0 .5rem;
  }
  .checkbox {
    filter: grayscale(100%);
  }
  input:hover {
    cursor: pointer;
  }
`;

const TagDiv = (props) => {
  return (
    <Container>
      <input className="checkbox" onChange={props.onChange} type="checkbox" checked={props.isChecked} name={props.tagName} id={props.id}></input>
      <h3> {props.tagName} </h3>
    </Container>
  )
}

export default TagDiv;