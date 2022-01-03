import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";

import Button from "./styled-components/Button";

const FolderContents = ({ tags, selectedTags, setSelectedTags }) => {

  //Sort initial tag data alphanumerically
  let isfolder = [];
  let isTag = [];
  const tagsSortAsc = tags.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase()
      ? -1
      : a.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : 0
  );

  //Separate sorted data into "Folders" and "Tags", create new sorted array so that "Folders" appear before "Tags" 
  tagsSortAsc.forEach((tag) => (tag.isFolder ? isfolder : isTag).push(tag));
  const sortedTags = isfolder.concat(isTag);

  //Initialize selectedFolder and parentFolder
  const [selectedFolder, setSelectedFolder] = useState({
    id: null,
    name: "",
    parentID: null,
  });
  const [parentFolder, setParentFolder] = useState({});

  //Set parent folder based on current navigation
  const getParentObj = () => {
    if (selectedFolder.parentID) {
      const parentObj = tags.filter(
        (tag) => tag._id === selectedFolder.parentID
      );
      setParentFolder(parentObj[0]);
    } else {
      setParentFolder({});
    }
  };

  //Backwards navigation, set selectedFolder to parent, "Back to previous"
  const onPrevFolderSelection = () => {
    if (parentFolder && parentFolder._id) {
      setSelectedFolder({
        id: parentFolder._id,
        name: parentFolder.name,
        parentID: parentFolder.parent,
      });
    } else {
      setSelectedFolder({ id: null, name: "", parentID: null });
    }
  };

  //Clear folder selection, "Back to Root"
  const clearFolderSelections = () => {
    setParentFolder({});
    setSelectedFolder({
      id: null,
      name: "",
      parentID: null,
    });
  };

  //Add/Remove tags from selectedTags as they are checked/unchecked
  const onTagSelectionChange = (e) => {
    if (e.target.checked) {
      setSelectedTags([
        ...selectedTags,
        { id: e.target.id, name: e.target.name },
      ]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag.name !== e.target.name));
    }
  };

  //Handle onKeyDown for keyboard navigation
  const onKeyDown = (event, tag) => {
    if (tag.isFolder){
      setSelectedFolder({
        id: tag._id,
        name: tag.name,
        parentID: tag.parent,
      })
    }
    if (!tag.isFolder && event.target.checked){
      event.target.checked = false
    }
    else if (!tag.isFolder && !event.target.checked){
      event.target.checked = true
    }
    onTagSelectionChange(event)
  }

  //Re-render on change
  useEffect(() => {
    getParentObj();
  }, [selectedFolder, selectedTags]);

  return (
    <section
      className="selectedFolder"
      aria-label={`You are currently in the selected folder ${
        selectedFolder.name ? selectedFolder.name : "Root Level"
      }`}
    >
      <div className="folderHeading">
        {/* Display selectedFolder name */}
        <h2>
          {" "}
          <FontAwesomeIcon icon={["far", "folder-open"]} />
          {selectedFolder.name ? selectedFolder.name : "Root Level"}
        </h2>

        {/* Display "Back to Previous" button if selectedFolder is not Root */}
        {selectedFolder.id ? (
          <Button
            onClick={() => {
              onPrevFolderSelection();
            }}
            aria-label="Go back to the previous folder"
          >
            <FontAwesomeIcon icon="chevron-left" /> back to previous
          </Button>
        ) : (
          <></>
        )}
      </div>

      <section className="folderContents">
        {/* Display all child tags of selectedFolder */}
        {sortedTags.map((tag) => {
          if (selectedFolder.id === tag.parent) {
            return (
              <Tag
                id={tag._id}
                key={tag._id}
                name={tag.name}
                isFolder={tag.isFolder}
                parent={tag.parent}
                onClick={() =>
                  setSelectedFolder({
                    id: tag._id,
                    name: tag.name,
                    parentID: tag.parent,
                  })
                }
                onKeyDown={(e) => e.key === "Enter" ? onKeyDown(e, tag) : null}
                onChange={(e) => onTagSelectionChange(e)}
                isChecked={selectedTags.map((el) => el.name).includes(tag.name)}
                testID={tag._id}
              />
            );
          } else { return null}
        })}
      </section>

      {/* Display "Back to Root" button if selectedFolder is not Root */}
      {selectedFolder.id ? (
        <Button
          onClick={() => {
            clearFolderSelections();
          }}
          aria-label="Go back to the root folder"
        >
          <FontAwesomeIcon icon="chevron-left" /> back to root
        </Button>
      ) : (
        <></>
      )}
    </section>
  );
};

export default FolderContents;
