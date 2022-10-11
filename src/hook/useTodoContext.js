import React from 'react';

const TodoListContext = React.createContext(undefined);

function TodoListProvider({ children, value }) {
  return (
      <TodoListContext.Provider value={value}>
         {children}
      </TodoListContext.Provider>
  );
}

function useTodoListContext() {
  const context = React.useContext(TodoListContext);
  
  if (context === undefined) {
    throw new Error("useTodoListContext는 TodoListProvider안에서 사용하여야 합니다.");
  }
  
  return context;
}

export { TodoListProvider, useTodoListContext };