import React from 'react';
import ClearCompletedBtn from './ClearCompletedBtn';

function Footer({ checkedTodoLength, todoCount, allClear }) {
   return (
      <footer className="footer">
         <span className="todo-count">
            <strong>
               {todoCount}
            </strong>
            item left
         </span>
         <ul className="filters">
            <li>
               필터 기능 추가 예정 
            </li>
            {/* <li>
               <a href="#/all">All</a>
            </li>
            <li>
               <a href="#/active">Active</a>
            </li>
            <li>
               <a href="#/completed">Completed</a>
            </li> */}
         </ul>
         <ClearCompletedBtn checkedTodoLength={checkedTodoLength} allClear={allClear}/>
      </footer>
   );
};

export default Footer;