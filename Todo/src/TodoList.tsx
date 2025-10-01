import { useState, type ChangeEvent } from "react";
import type { Todo } from "./hooks/useTodo";
import "./App.css";

interface TodoListProps {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onAddTodo, onDeleteTodo }: TodoListProps) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnAdd = () => {
    onAddTodo(text);
    setText("");
  };

  return (
    <div className="flex items-center flex-col gap-[40px] bg-white py-[80px] px-[30px] m-[60px] rounded-3xl">
      <h1 className="font-bold text-black">Todo List</h1>
      <div className="flex gap-[10px] mt-[20px]">
        <input
          className="p-2 text-black border-black rounded shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleOnAdd}>Добавить</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between p-3 border rounded-xl shadow-sm hover:shadow-md transition"
            key={todo.id}
          >
            <span className="text-gray-800 text-xl font-medium">
              {todo.text}
            </span>
            <button className="ml-3" onClick={() => onDeleteTodo(todo.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
