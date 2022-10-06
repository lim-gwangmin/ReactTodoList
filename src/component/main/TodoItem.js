import EditInput from './EditInput';

function TodoItem({ todo, checkTodo, deleteTodo, editModeTodo, editTodo }) {
   return (
      todo.map( arg => (
         <EditInput
            key={arg.id}
            todoItem={arg}
            editTodo={editTodo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            editModeTodo={editModeTodo}
         />
      ))
   );
};

export default TodoItem;