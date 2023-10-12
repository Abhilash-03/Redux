import {useDispatch, useSelector} from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'

function TodoItem() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <>
      {
        todos.map((todo) => (
            <ul key={todo.id} className='flex mt-4 justify-center w-full items-center'>
            <li className='bg-slate-900 p-2 text-white w-6/12 text-lg flex justify-between rounded-md items-center'>{todo.text}
          
              <button onClick={() => dispatch(deleteTodo(todo.id))} className='bg-red-500 w-8 rounded-md hover:bg-red-400 hover:text-black focus:bg-slate-300'>X</button>
            </li>
        </ul>
        ))
      }
      </>
  )
}

export default TodoItem