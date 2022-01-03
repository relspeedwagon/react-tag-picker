import styled from "styled-components";

const Container = styled.div.attrs((props) => ({}))`
  background-color: #eceef5;
  border: 0.5px solid #f7f7fb;
  border-radius: 500px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 2.5rem;
  padding: 0.4rem 1rem;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0 0.5rem;
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
      <input
        type="checkbox"
        className="checkbox"
        id={props.id}
        name={props.tagName}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        checked={props.isChecked}
        data-testid={props.testID}
        aria-label={
          props.isChecked
            ? `${props.tagName}, is in selected tags`
            : `${props.tagName}, check to add to selected tags`
        }
      ></input>
      <label htmlFor={props.id}>
        <h3> {props.tagName} </h3>
      </label>
    </Container>
  );
};

export default TagDiv;
