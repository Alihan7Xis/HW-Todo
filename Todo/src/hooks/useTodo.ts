import { useState } from "react";

export interface Todo {
  id: string;
  text: string;
}

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (!text.trim()) return; 
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, deleteTodo };
};

export default useTodo;
