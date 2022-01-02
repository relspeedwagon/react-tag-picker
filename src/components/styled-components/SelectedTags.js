import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const Container = styled.div.attrs((props) => ({}))`
  width: fit content;
  border: 0.2px solid #bed4d4;
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
  span {
    background-color: #eceef5;
    color: #4658a1;
    border: 0.5px solid #f7f7fb;
    border-radius: 500px;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0.3rem 1rem 0.3rem 0;
    padding: 0.4rem 1rem;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

const SelectedTags = (props) => {
  return (
    <Container>
      <h3 id="selectedTagsLabel">Selected Tags</h3>
      <div className="tagList" role="list" aria-labelledby="selectedTagsLabel">
        {props.selectedTags.map((item) => {
          return (
            <span role="listitem" key={item.id}>
              {item.name}
            </span>
          );
        })}
      </div>
      <Button onClick={props.onClick} background="#4658A1">
        <FontAwesomeIcon icon="times" /> clear selected tags
      </Button>
    </Container>
  );
};

export default SelectedTags;
