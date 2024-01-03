import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  return (
    <div>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="Write!"
      />
    </div>
  );
}

export default App;
