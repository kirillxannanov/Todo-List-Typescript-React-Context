import randomColor from 'randomcolor'
import { ChangeEvent, FC, FormEvent, MouseEvent, useContext } from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import { v4 as uuidv4 } from 'uuid'
import { ContextTodo } from '../Contexts/ContextProviderTodo'

const TodoForm: FC = () => {
	const { todoList, setTodoList } = useContext(ContextTodo)
	const { todo, setTodo } = useContext(ContextTodo)

	const handlerAddTodo = (
		e: FormEvent<HTMLFormElement> & MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault()
		if (todo.length > 0 && todo.trim()) {
			setTodoList([
				...todoList,
				{
					id: uuidv4(),
					text: todo,
					isDone: false,
					isEdit: false,
					color: randomColor({
						luminosity: 'light',
					}),
					defaultPos: {
						x: 0,
						y: 0,
					},
				},
			])
			setTodo('')
		}
	}

	const handlerChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}
	return (
		<>
			<p className='flex justify-center text-7xl font-bold mt-20  text-white'>
				Todo List
			</p>
			<div className='flex justify-center items-center gap-4 mt-10 '>
				<form onSubmit={handlerAddTodo}>
					<input
						title='Todo'
						placeholder='Todo'
						className='p-4 rounded-lg'
						type='text'
						value={todo}
						onChange={handlerChangeTodo}
					/>
				</form>
				<button
					className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 '
					title='Submit'
				>
					<CiSquarePlus color='white' size={80} onClick={handlerAddTodo} />
				</button>
			</div>
			<p className='flex justify-center text-3xl font-normal mt-3 text-white'>
				{!todoList.length && 'Empty'}
			</p>
		</>
	)
}

export default TodoForm
