import { useEffect } from 'react';
import { EVENT_TYPE } from 'constants/constants';

function useOnClickOutside(ref, handler) {
   
   useEffect(() => {
     const listener = (event) => {
       if (!ref.current || ref.current.contains(event.target)) {
         return;
       }
       handler(event);
     };

     document.addEventListener(EVENT_TYPE.MOUSE_DOWN, listener);
     document.addEventListener(EVENT_TYPE.THOUCH_START, listener);
     return () => {
       document.removeEventListener(EVENT_TYPE.MOUSE_DOWN, listener);
       document.removeEventListener(EVENT_TYPE.THOUCH_START, listener);
     };
   }, [ref, handler]);
};

export default useOnClickOutside;