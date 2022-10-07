import React from 'react';
import { KEYBOARD_KEY } from '../../constants/constants';

function Header({ createTodo, value }) {
   const [ text, setText ] = React.useState('');
   /**
    * 키보드 이벤트 엔터 클릭해야만 리스트 추가
    * @param {*} e event object
    * @returns undefined
    */
   const handleCreateTodo = e => {
      if(e.key !== KEYBOARD_KEY.ENTER) return;
      if(text === KEYBOARD_KEY.VACANT_STRING) return;

      createTodo(text);
      setText('');
   };

   return (
      <header className="header">
         <h1>todos</h1>
         <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={text}
            onChange={ e => setText(e.target.value)}
            onKeyPress={handleCreateTodo}
         />
      </header>
   );
};

export default Header;