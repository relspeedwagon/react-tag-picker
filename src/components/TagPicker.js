import tags from "../tags.json";
import Tag from "./Tag.js";

const TagPicker = () => {
  return (
    <div>
      <h1>Tag Picker</h1>
      {tags.map((tag) => {
        return (
          <Tag
            name={tag.name}
            isFolder={tag.isFolder}
          />
        )
      })}
      
    </div>
  )
}

export default TagPicker;