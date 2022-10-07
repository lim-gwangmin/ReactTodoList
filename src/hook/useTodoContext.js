import React from 'react';

const TodoListContext = React.createContext(undefined);

function TodoListProvider({ children, value }) {
  return (
      <TodoListContext.Provider value={value}>
         {children}
      </TodoListContext.Provider>
  );
}

function useCounterContext() {
  const context = React.useContext(TodoListContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a TodoListProvider");
  }
  return context;
}

export { TodoListProvider, useCounterContext };