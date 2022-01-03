import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FolderContents from "../components/FolderContents";
import testTags from "./testTags";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft, faChevronRight, faFolder, faTimes,} from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
library.add(faChevronLeft, faChevronRight, faFolder, faFolderOpen, faTimes);

const tags = testTags;
const selectedTags = [];

test("On initial render, selected folder heading will display the text 'Root Folder'", () => {
  render(<FolderContents tags={tags} selectedTags={selectedTags} />);
  expect(screen.getByText('Root Level')).toBeInTheDocument()

})
  
test("On render, 'Folders' (tag.isFolder == true) will render as a button, and 'Tags' (tag.isFolder == false) will render as a checkbox", () => {
  render(<FolderContents tags={tags} selectedTags={selectedTags} />);

  expect(screen.getByRole('checkbox', {testID: /123/i})).toBeInTheDocument()
  expect(screen.getByRole('button', {testID: /456/i})).toBeInTheDocument()
})

test("Folders are clickable and update selectedFolder children onClick", () => {
  render(<FolderContents tags={tags} selectedTags={selectedTags} />);

  const testFolderTarget = screen.getByTestId('456');
  const childFolder = '1011';
  const childTag = '789';

  expect(testFolderTarget).toBeInTheDocument();
  userEvent.click(testFolderTarget);
  expect(screen.getByTestId(childFolder)).toBeInTheDocument();
  expect(screen.getByTestId(childTag)).toBeInTheDocument();
})