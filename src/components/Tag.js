import TagDiv from "./styled-components/TagDiv";
import FolderDiv from "./styled-components/FolderDiv";

const Tag = ({
  _id,
  name,
  isFolder,
  parent,
  ancestors,
}) => {
  return (
    <>
    {isFolder === true ? <FolderDiv><h2>{name}</h2></FolderDiv> : <TagDiv><h3>{name}</h3></TagDiv>}
    </>
  )
}

export default Tag;