import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
}))`
width: fit content;
border: 0.2px solid #BED4D4;
border-radius: 3px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: left;
align-items: center;
margin: 5% 10%;
padding: 1rem;
  span{
    color: #399993;
    border: 0.1px solid #4BCCC3;
    border-radius: 4px;
    font-size: 1.3rem;
    font-weight: 700;
    margin: .3rem .5rem;
    padding: .4rem;
  }
`;

const SelectedTags = (props) => {
  return (
    <Container>
      {props.selectedTags.map((item) => {
        return (
          <span key={item.id}>{item.name}</span>
        )
      }

      )}
    </Container>
  )
}

export default SelectedTags;