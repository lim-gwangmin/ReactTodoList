import React from 'react'
import { TodoListProvider } from 'hook/useTodoContext';
import { Header, Main, Footer } from './index';

function TodoApp({ children, value: todoList }) {
  return (
      <TodoListProvider value={todoList}>
         <section className="todoapp">
            {children}
         </section>
         <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
         </footer>
      </TodoListProvider>
  );
};

TodoApp.Header = Header;
TodoApp.Main = Main;
TodoApp.Footer = Footer;

export default TodoApp