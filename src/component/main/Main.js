import TodoItem from './TodoItem';

function Main({ 
   todoList, 
   activeAllCheckBox, 
   deleteTodo, 
   checkTodo, 
   allCheckTodo, 
   editModeTodo, 
   editTodo 
}) {
  return (
      <section className="main">
         <input 
            id="toggle-all" 
            className="toggle-all"
            type="checkbox"
            checked={activeAllCheckBox}
            onChange={allCheckTodo}
         />
         <label htmlFor="toggle-all">Mark all as complete</label>
         <ul className="todo-list">
            <TodoItem 
               todo={todoList}
               checkTodo={checkTodo}
               deleteTodo={deleteTodo}
               editModeTodo={editModeTodo}
               editTodo={editTodo}
            />
         </ul>
      </section>
  );
};

export default Main;