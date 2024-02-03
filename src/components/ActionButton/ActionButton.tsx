import { FC, useContext } from 'react'
import { ContextTodo } from '../Contexts/ContextProviderTodo'

const ActionButton: FC = () => {
	const { todoList, setTodoList } = useContext(ContextTodo)
	const count: number = todoList.filter(el => el.isDone).length

	const handlerResetTodo = () => {
		setTodoList([])
	}

	const handlerDeleteTodo = () => {
		setTodoList(todoList.filter(el => !el.isDone))
	}

	return (
		<div className='flex justify-center items-center gap-8 mt-2 text-white'>
			{Boolean(todoList.length) && (
				<button
					title='Reset'
					onClick={handlerResetTodo}
					className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-blue-500 duration-300  rounded-lg px-6 py-2 shadow-lg'
				>
					Reset
				</button>
			)}

			{Boolean(todoList.length) &&
				(count ? (
					<button
						title='Delete'
						onClick={handlerDeleteTodo}
						className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-blue-500 duration-300  rounded-lg px-6 py-2 shadow-lg '
					>
						Delete
					</button>
				) : (
					<button
						title='Delete'
						onClick={handlerDeleteTodo}
						className='px-6 py-2  text-gray-500'
					>
						Delete
					</button>
				))}
		</div>
	)
}

export default ActionButton
