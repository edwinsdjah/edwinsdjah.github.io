import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // Use State digunakan untuk mengubah nilai di dalam variabel pertama, dan menggunakan fungsi Set, untuk mengubahnya

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  // Penulisan use state menggunakan function

  // Contoh penggunaan usestate untuk merekam perubahan value pada text
  const [text, setText] = useState("");

  // Contoh penggunaan useState dan effect untuk melakukan pemanggilan fetching API
  const [posts, setPost] = useState([]);

  // contoh penggunaan useEffect untuk fetching API
  // use effect digunakan untuk monitoring variable, dan akan berlaku apabila variable tersebut ada perubahan
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  // Contoh todolist dengan usestate
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (task.trim === "") return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <h1>Use State dan Use Effect</h1>
      <h3>Simple Counter</h3>
      <div className="card">{count}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>

      <h3>Real Time changer</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // Listener on change akan merekam perubahan pada nilai e di input text
      />
      <p>Kamu mengetik : {text}</p>

      <h3>Hasil Fetching menggunakan useEffect pada API</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h3>Simple Todo List</h3>
      <input
        type="text"
        placeholder="Masukan Task.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Tambah tasks</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Simpan</button>
              </>
            ) : (
              <>
                {todo.text}
                <button
                  onClick={() => {
                    handleEdit(todo);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Hapus
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
