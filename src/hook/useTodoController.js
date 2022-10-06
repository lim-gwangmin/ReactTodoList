import React from 'react';

let initalId = 1;

function useTodoController( initalTodoList ) {
   const [ todoList, setTodoList ] = React.useState(initalTodoList);

   // todoList 추가
   const createTodo = text => {
      setTodoList([...todoList, { id: initalId++, text, edit:false, done:false }]);
   };
   
   // todoList 삭제
   const deleteTodo = id => {
      setTodoList(todoList.filter( arg => arg.id !== id ));
   };

   // todoList 체크
   const checkTodo = id => {
      const checkTodoFilter = todoList.map( arg => {
         if(arg.id === id) {
            return { ...arg, done: !arg.done }
         }
         return arg;
      });

      setTodoList(checkTodoFilter);
   };

   // todoList 전체체크
   const allCheckTodo = () => {
      const checkedItemLength = todoList.filter( arg => arg.done === true ).length;
      const toggleFilter = todoList.length === checkedItemLength ? false : true;

      setTodoList(todoList.map( arg => ({ ...arg, done: toggleFilter })));
   };
   
   // todoList 체크된 항목 전체삭제
   const allClear = () => {
      setTodoList(todoList.filter( arg => arg.done !== true ));
   };

   // todoList 수정모드
   const editModeTodo = id => {
      const editModeTodoFilter = todoList.map( arg => {
         if(arg.id === id) {
            return { ...arg, edit: true }
         }
         return arg;
      });

      setTodoList(editModeTodoFilter);
   };

   // todoList 수정
   const editTodo = ( id, text ) => {
      const editTodoFilter = todoList.map( arg => {
         if(arg.id === id) {
            return { ...arg, text, edit: false }
         }
         return { ...arg, edit: false };
      });
      setTodoList(editTodoFilter);
   };

   return { 
      todoList, 
      createTodo, 
      deleteTodo, 
      checkTodo, 
      allCheckTodo,      
      allClear,
      editModeTodo,
      editTodo,
   };
};


export default useTodoController;