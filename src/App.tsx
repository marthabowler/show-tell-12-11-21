import { useState } from "react";
import painterList from "./painter.json";

interface painterInfo {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
}

const allPainters: painterInfo[] = painterList;

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const painter = allPainters[index];
  return (
    <>
      <h1>My favourite painters</h1>
      {index > 0 && (
        <button onClick={() => setIndex(index - 1)}>Previous</button>
      )}
      {index < allPainters.length - 1 && (
        <button onClick={() => setIndex(index + 1)}>Next</button>
      )}
      <p>
        Displaying {index + 1} of {allPainters.length}
      </p>

      <p>{painter.name}</p>
      <button onClick={() => setShowMore(!showMore)}>Show More</button>
      {showMore && <p>{painter.bio}</p>}
    </>
  );
}

export default App;
