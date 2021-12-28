import { useEffect } from "react";
import TagDiv from "./styled-components/TagDiv";
import FolderDiv from "./styled-components/FolderDiv";

const Tag = ({
  id,
  name,
  isFolder,
  parent,
  ancestors,
  onClick,
}) => {

  
  return (
    <>
    {isFolder === true ? 
      <FolderDiv 
        folderName={name}
        onClick={onClick}
        >
      </FolderDiv> 

    : <TagDiv tagName={name}></TagDiv>}
    </>
  )
}

export default Tag;