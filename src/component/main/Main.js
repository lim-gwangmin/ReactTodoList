import TodoItem from './TodoItem';
import { useLocation } from 'react-router';
import { useCounterContext } from '../../hook/useTodoContext';
import useFilterTodoList from '../../function/FilterTodoList';

function Main() {
   const locationState = useLocation().state;
   const locationFilterType = locationState ? locationState.filterType : null;
   const {
      todoList, 
      deleteTodo, 
      checkTodo, 
      allCheckTodo, 
      editModeTodo, 
      editTodo,
   } = useCounterContext();

   const { filterTodoList } = useFilterTodoList(todoList, locationFilterType);
   
   return (
      <section className="main">
         <input 
            id="toggle-all" 
            className="toggle-all"
            type="checkbox"
            checked={todoList.filter(arg => arg.done === true).length > 0 ? true : false}
            onChange={allCheckTodo}
         />
         <label htmlFor="toggle-all">Mark all as complete</label>
         <ul className="todo-list">
            <TodoItem 
               todo={filterTodoList}
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