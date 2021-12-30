import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faFolder, faTimes} from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import FolderContents from "./FolderContents";
import tags from "../tags.json";

library.add(faChevronLeft, faChevronRight, faFolder, faFolderOpen, faTimes)

const TagPicker = () => {
  
  return (
    <div>
      <h1 className="title" >Tag Picker</h1>
      <FolderContents
        tags={tags}
      /> 
    </div>
  )
}

export default TagPicker;