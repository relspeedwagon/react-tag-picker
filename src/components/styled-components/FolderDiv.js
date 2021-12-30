import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div.attrs((props) => ({
}))`
background-color: #EBF5F4;
border: 0.2px solid #BED4D4;
border-radius: 3px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: end;
margin: .5rem 0;
padding: .75rem 1.5rem .75rem 2.5rem;
  .folderName {
    display: flex;
    align-items: flex-start;
  }
  h3 {
    margin: 0 0 0 .9rem;
  }
  svg {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
  .chevron {
    color: #4658A1;
  }
  &:hover {
    cursor: pointer;
  }
`;

const FolderDiv = (props) => {
  return (
    <Container onClick={props.onClick}>
      <div className="folderName">
        <FontAwesomeIcon icon="folder" />
        <h3> {props.folderName} </h3>
      </div>
      <FontAwesomeIcon className="chevron" icon="chevron-right" />
    </Container>
  )
}

export default FolderDiv;