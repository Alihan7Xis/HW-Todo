import TodoList from "./TodoList";
import useTodo from "./hooks/useTodo";

const TodoApp = () => {
  const { todos, addTodo, deleteTodo } = useTodo();

  return (
    <TodoList todos={todos} onAddTodo={addTodo} onDeleteTodo={deleteTodo} />
  );
};

export default TodoApp;
