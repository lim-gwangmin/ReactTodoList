import { LOCATION_STATE } from 'constants/constants';

function useFilterTodoList(initalTodoList, filterType) {
   let todoList = initalTodoList;
   
   switch(filterType) {
      case LOCATION_STATE.ACTIVE:
         todoList = initalTodoList.filter( arg => arg.done === false);
         break;
      case LOCATION_STATE.COMPLETED:
         todoList = initalTodoList.filter( arg => arg.done === true);
         break;
      case LOCATION_STATE.ALL:
      default:
         todoList = initalTodoList;
   };

   return { filterTodoList: todoList }
};

export default useFilterTodoList;