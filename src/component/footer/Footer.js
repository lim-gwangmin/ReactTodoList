import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATH, LOCATION_STATE } from 'constants/constants';
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
               <NavLink 
                  to={ROUTE_PATH.ALL} 
                  className={ ({ isActive }) => isActive ? `selected` : undefined}
                  state={{filterType: LOCATION_STATE.ALL}}
               >
                  All
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to={ROUTE_PATH.ACTIVE} 
                  className={ ({ isActive }) => isActive ? `selected` : undefined}
                  state={{filterType: LOCATION_STATE.ACTIVE}}
               >
                  Active
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to={ROUTE_PATH.COMPLETED} 
                  state={{filterType: LOCATION_STATE.COMPLETED}}
                  className={ ({ isActive }) => isActive ? `selected` : undefined}
               >
                  Completed
               </NavLink>
            </li>
         </ul>
         <ClearCompletedBtn checkedTodoLength={checkedTodoLength} allClear={allClear}/>
      </footer>
   );
};

export default Footer;