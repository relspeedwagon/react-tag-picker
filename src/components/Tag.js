import { useEffect } from "react";
import TagDiv from "./styled-components/TagDiv";
import FolderDiv from "./styled-components/FolderDiv";

const Tag = ({
  id,
  name,
  isFolder,
  onClick,
  onChange,
  isChecked
}) => {

  
  return (
    <>
    {isFolder === true ? 
      <FolderDiv 
        folderName={name}
        onClick={onClick}
        >
      </FolderDiv> 

    : <TagDiv 
        id={id}
        tagName={name}
        onChange={onChange}
        isChecked={isChecked}
      ></TagDiv>}
    </>
  )
}

export default Tag;