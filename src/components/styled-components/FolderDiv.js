import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
}))`
width: 100%;
background-color: #DAF2F2;
border: 0.2px solid #BED4D4;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  h2 {
  }
  &:hover {
    cursor: pointer;
  }
`;

const FolderDiv = (props) => {
  return (
    <Container onClick={props.onClick}>
      <h2> {props.folderName} </h2>
    </Container>
  )
}

export default FolderDiv;