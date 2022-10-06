function ClearCompletedBtn({ checkedTodoLength, allClear }) {
   return (
      checkedTodoLength > 0 
      &&        
      <button className="clear-completed" onClick={allClear}>
         Clear completed
      </button>
   );  
};


export default ClearCompletedBtn;