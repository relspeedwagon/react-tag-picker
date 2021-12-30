import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const Container = styled.div.attrs((props) => ({
}))`
width: fit content;
border: 0.2px solid #BED4D4;
border-radius: 3px;
margin: 2rem 0 1rem 0;
padding: 1rem;
text-align: right;
  .tagList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    margin-bottom: 1rem;
  }
  h3 {
    margin: 0;
    text-align: left;
  }
  span{
    background-color: #ECEEF5;
    color: #4658A1;
    border: 0.5px solid #F7F7FB;
    border-radius: 500px;
    font-size: 1.3rem;
    font-weight: 700;
    margin: .3rem 1rem .3rem 0;
    padding: .4rem 1rem;
  }
  svg {
    margin-right: .5rem;
  }
`;

const SelectedTags = (props) => {
  return (
    <Container>
      <h3>Selected Tags</h3>
      <div className="tagList" >
        {props.selectedTags.map((item) => {
          return (
            <span key={item.id}>{item.name}</span>
          )
        })}
      </div>
      <Button onClick={props.onClick} background="#4658A1"><FontAwesomeIcon icon="times"/> clear selected tags</Button>
    </Container>
  )
}

export default SelectedTags;