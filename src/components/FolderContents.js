import { useState, useEffect } from "react";
import Tag from "./Tag";
import SelectedTags from "./styled-components/SelectedTags"

const FolderContents = ({
  tags,
}) => {
  let isfolder = []
  let isTag = []
  const tagsSortAsc = tags.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0);
  tagsSortAsc.forEach((tag) => (tag.isFolder ? isfolder : isTag).push(tag));
  const sortedTags = isfolder.concat(isTag);

  const [selectedFolder, setSelectedFolder] = useState({
    id: null,
    name: "",
    parentID: null,
  });
  const [parentFolder, setParentFolder] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);

  const getParentObj = () => {
    if (selectedFolder.parentID){
      const parentObj = tags.filter((tag) => tag._id === selectedFolder.parentID)
      setParentFolder(parentObj[0]);
    } else {
      setParentFolder({});
    }
  }

  const onPrevFolderSelection = () => {
    if (parentFolder && parentFolder._id){
      setSelectedFolder({id: parentFolder._id, name: parentFolder.name, parentID: parentFolder.parent})
    } else {
      setSelectedFolder({id: null, name: "", parentID: null});
    }
  }

  const onTagSelectionChange = (e) => {
    if (e.target.checked){
      setSelectedTags([...selectedTags, {id: e.target.id, name: e.target.name}]);
    } else{
      setSelectedTags(selectedTags.filter(tag => tag.name !== e.target.name))
    }
  }

  useEffect(() => {
    getParentObj();
  }, [selectedFolder, selectedTags])


  return (
    <div className="folderContents"> 
      <h1>{selectedFolder.name ? selectedFolder.name : "Root Level"}</h1>
      {selectedFolder.id ? <button onClick={() => {onPrevFolderSelection()}}> back </button> : <></>}
      
      <section className="tagList">
      {
        sortedTags.map((tag) => {
          if (selectedFolder.id === tag.parent){
            return (
              <Tag
                id={tag._id}
                key={tag._id}
                name={tag.name}
                isFolder={tag.isFolder}
                parent={tag.parent}
                onClick={() => setSelectedFolder({id: tag._id, name: tag.name, parentID: tag.parent})}
                onChange={(e) => onTagSelectionChange(e)}
                isChecked={selectedTags.map(el => el.name).includes(tag.name)}
              />
            )
          }
        })
      }
      </section>
      {selectedTags.length ? <SelectedTags selectedTags={selectedTags} /> : <></>}
    </div>
  )

}

export default FolderContents;