
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
    <div className='h-screen w-full bg-gray-700 p-3 flex flex-col pt-5 items-center'>
      <h1 className='text-5xl pb-5 text-white font-extrabold '>Todos</h1>
     <Todo />
     <TodoItem />
     </div>
     </>
  )
}

export default App
