import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faFolder,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import FolderContents from "./FolderContents";
import SelectedTags from "./styled-components/SelectedTags";
import tags from "../tags.json";

library.add(faChevronLeft, faChevronRight, faFolder, faFolderOpen, faTimes);

const TagPicker = () => {
  // Set selectedTags
  const [selectedTags, setSelectedTags] = useState([]);
  
  return (
    <main className="tagPicker">
      <h1 className="title">Tag Picker</h1>
      <FolderContents tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      
      {/* Display selectedTags if any */}
      {selectedTags.length ? (
        <SelectedTags
          selectedTags={selectedTags}
          onClick={() => setSelectedTags([])}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default TagPicker;
