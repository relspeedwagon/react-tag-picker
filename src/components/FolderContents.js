import { useState, useEffect } from "react";
import Tag from "./Tag";
import tags from "../tags.json";

const FolderContents = ({
}) => {
  const [selectedFolder, setSelectedFolder] = useState();

  useEffect(() => {
    console.log("useEFFECT", selectedFolder);
  }, [selectedFolder])


  return (
    <div> 
      {
        selectedFolder ?
        tags.map((tag) => {
          if (selectedFolder === tag.parent){
            return (
              <Tag
                id={tag._id}
                key={tag._id}
                name={tag.name}
                isFolder={tag.isFolder}
                parent={tag.parent}
                onClick={() => {setSelectedFolder(tag._id); console.log("click", selectedFolder)}}
                selectedFolder={selectedFolder} 
                setSelectedFolder={setSelectedFolder}
              />
            )
          }
      })
      : tags.map((tag) => {
        if (!tag.parent){
          return (
            <Tag
              id={tag._id}
              key={tag._id}
              name={tag.name}
              isFolder={tag.isFolder}
              parent={tag.parent}
              onClick={() => {setSelectedFolder(tag._id); console.log("click", selectedFolder)}}
              selectedFolder={selectedFolder} 
              setSelectedFolder={setSelectedFolder}
            />
          )
        }
    })
      }
    </div>
  )

}

export default FolderContents;