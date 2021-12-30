import { useState } from "react";
import FolderContents from "./FolderContents";
import tags from "../tags.json";

const TagPicker = () => {
  
  return (
    <div>
      <FolderContents
        tags={tags}
      /> 
    </div>
  )
}

export default TagPicker;