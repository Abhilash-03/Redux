import { useRef, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function Todo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(input){
          dispatch(addTodo(input));
          setInput('');
        }
        inputRef.current.focus()
    }

  return (
    <form onSubmit={handleAddTodo} className='flex w-6/12 sm:min-w-max'>
      <input type="text" placeholder='enter todos' value={input} onChange={(e) => setInput(e.target.value)} className='h-11 w-full px-2 text-lg outline-none rounded-s-lg  hover:bg-slate-500 focus:bg-slate-500 focus:text-white border-solid hover:border-2 border-black' ref={inputRef} />
      <button className='bg-blue-500 p-2 h-11 w-10 text-lg font-bold ring-gray-400 rounded-e-lg focus:bg-green-700 hover:bg-green-400'>+</button>
    </form>
  )
}

export default Todo
