import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // current.push 방식은 const를 건드리는 것이기에 옳지 않음
    // 그렇기에 새로운 배열을 생성해야 함
    // ...('전개 연산자'라 함)을 통하여
    // 배열을 전개한 것을 반환한다
    setToDos((current) => [toDo, ...current]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write!"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* map의 첫요소 함수는 배열의 각 요소에 적용됨 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
