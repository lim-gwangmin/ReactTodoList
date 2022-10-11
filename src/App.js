import React from 'react';
import TodoApp from 'component/TodoApp';
import useTodoController from 'hook/useTodoController';

function App() {
   const {
      todoList, 
      createTodo, 
      deleteTodo, 
      checkTodo, 
      allCheckTodo,      
      allClear,
      editModeTodo,
      editTodo,
   } = useTodoController([]);

   return (
      <TodoApp value={{ todoList, deleteTodo, checkTodo, allCheckTodo, editModeTodo, editTodo }}>
         <TodoApp.Header createTodo={createTodo}/>
         <TodoApp.Main/>
         <TodoApp.Footer 
            checkedTodoLength={todoList.filter(arg => arg.done === true).length}
            todoCount={todoList.length} 
            allClear={allClear}
         />
      </TodoApp>
   );
};


export default App;