import React from 'react';
import TodoApp from './component/TodoApp';
import useTodoController from './hook/useTodoController';

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
      <TodoApp>
         <TodoApp.Header createTodo={createTodo}/>
         <TodoApp.Main 
            todoList={todoList} 
            activeAllCheckBox={todoList.filter(arg => arg.done === true).length > 0 ? true : false}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            allCheckTodo={allCheckTodo}
            editModeTodo={editModeTodo}
            editTodo={editTodo}
         />
         <TodoApp.Footer 
            checkedTodoLength={todoList.filter(arg => arg.done === true).length}
            todoCount={todoList.length} 
            allClear={allClear}
         />
      </TodoApp>
   );
};


export default App;