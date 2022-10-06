import React from 'react';
import { KEYBOARD_KEY, CLASS_NAME } from '../../constants/constants';
import useOnClickOutside from '../../hook/useOnClickOutLine';


function EditInput({todoItem, checkTodo, deleteTodo, editModeTodo, editTodo}) {
   const editInputRef = React.useRef(null);
   const [ editText, setEditText ] = React.useState('');

   useOnClickOutside(editInputRef, () => {
      if(editText === KEYBOARD_KEY.VACANT_STRING) return;

      editTodo(todoItem.id, editText);
   });

   /**
    * 해당 리스트 체크가 되면 completed 클래스 추가
    * 해당 리스트 수정모드가 되면 editing 클래스 추가
    * @param {*} todoItem 현재 리스트의 object
    * @returns undefined
    */
   const classNameFilter = todoItem => {
      return todoItem.edit === true ? CLASS_NAME.EDITING : (todoItem.done === true ? CLASS_NAME.COMPLETED : KEYBOARD_KEY.VACANT_STRING);
   };


   /**
    * 키보드 이벤트 : 엔터키 입력해야만 해당 id 리스트의 텍스트 변경
    * @param {*} e event object
    * @param {*} id 해당 배열의 고유 id값
    * @returns undefined
    */
   const handleEditTodo = (e, id) => {
      if(e.key !== KEYBOARD_KEY.ENTER) return;
      if(editText === KEYBOARD_KEY.VACANT_STRING) return;

      editTodo(id, editText);
   };

   
   /**
    * esc 입력 시 포커스 제거 및 수정내용 초기화
    * @param {*} e event object
    * @returns undefined
    */
   const escapeEditClose = e => {
      if(e.key !== KEYBOARD_KEY.ESCAPE) return;
      if(editText === KEYBOARD_KEY.VACANT_STRING) return;

      setEditText(todoItem.text);
      editTodo(todoItem.id, todoItem.text);
   };

   /**
    * 수정 모드가 되면 해당 리스트의 Input 포커스 in
    */
   React.useEffect(() => {
      if(editInputRef.current !== null) {
         editInputRef.current.focus();
      }
   },[todoItem.edit]);

   return (
      <li 
         key={todoItem.id} 
         className={classNameFilter(todoItem)} 
         onDoubleClick={() => {
            setEditText(todoItem.text);
            editModeTodo(todoItem.id);
         }}
      >
         <div className="view">
            <input
               className="toggle"
               type="checkbox"
               checked={todoItem.done}
               onChange={() => checkTodo(todoItem.id)}
            />
            <label>{todoItem.text}</label>
            <button 
               className="destroy"
               onClick={() => deleteTodo(todoItem.id)}
            />
         </div>
         <input 
            ref={editInputRef}
            className="edit" 
            autoComplete="off"
            value={editText}
            onChange={ e => setEditText(e.target.value)}
            onKeyPress={ e => handleEditTodo(e, todoItem.id)}
            onKeyDown={escapeEditClose}
         />
      </li>
   );
};


export default EditInput;