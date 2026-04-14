function TodoList() {

    const todoList = [
        { id: 1, title: "Learn React" },
        { id: 2, title: "Build a project" },
        { id: 3, title: "Apply for jobs" }
];
  return (
   
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;