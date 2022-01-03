import TagDiv from "./styled-components/TagDiv";
import FolderDiv from "./styled-components/FolderDiv";

const Tag = ({ id, name, isFolder, onClick, onKeyDown, onChange, isChecked, testID }) => {
  return (
    <>
      {isFolder === true ? (
        <FolderDiv 
          folderName={name} 
          onClick={onClick}
          onKeyDown={onKeyDown}
          testID={testID}
        ></FolderDiv>
      ) : (
        <TagDiv
          id={id}
          tagName={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          isChecked={isChecked}
          testID={testID}
        ></TagDiv>
      )}
    </>
  );
};

export default Tag;
