import { FC, useContext } from 'react'
import Draggable from 'react-draggable'
import { FaCheck } from 'react-icons/fa6'
import { MdDelete, MdEdit } from 'react-icons/md'
import { ContextTodo } from '../Contexts/ContextProviderTodo'

interface ITodo {
	todo: string
	todoId: string
	isDone: boolean
	isEdit: boolean
	color: string
	defaultPos: {
		x: number
		y: number
	}
	index: number
}

const Todo: FC<ITodo> = ({
	todo,
	todoId,
	isDone,
	isEdit,
	color,
	defaultPos,
	index,
}) => {
	const { todoList, setTodoList } = useContext(ContextTodo)

	const handlerDeleteTodo = (id: string) => {
		setTodoList(todoList.filter(el => el.id !== id))
	}

	const handlerDoneTodo = (id: string) => {
		setTodoList(
			todoList.map(el => {
				if (el.id === id) return { ...el, isDone: !el.isDone }

				return el
			})
		)
	}

	const onSubmit = e => {
		e.prevantDefault()
	}

	const handlerEditTextTodo = (id: string, text: string) => {
		onSubmit
		setTodoList(
			todoList.map(el => {
				if (el.id === id) return { ...el, isEdit: !el.isEdit, text: text }

				return el
			})
		)
	}

	const onStop = (data: Object, index: number) => {
		let newArray = [...todoList]
		newArray[index].defaultPos = { x: data.x, y: data.y }
		setTodoList(newArray)
	}

	return (
		<Draggable
			defaultPosition={defaultPos}
			onStop={(_, data) => onStop(data, index)}
		>
			<div
				style={{ backgroundColor: color }}
				className='flex justify-between items-center w-96 p-6 rounded-lg gap-3 cursor-pointer mt-3 absolute'
			>
				<div
					className='text-lg '
					style={{
						textDecorationLine: isDone ? 'line-through  ' : '',
						opacity: isDone ? 0.33 : '',
					}}
				>
					{isEdit ? (
						<form onSubmit={() => handlerEditTextTodo(todoId, todo)}>
							<input
								className=' border-solid border-2 rounded-lg w-40 size-10 	'
								type='text'
								value={todo}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setTodoList(
										todoList.map(el => {
											if (el.id === todoId)
												return { ...el, text: e.target.value }
											return el
										})
									)
								}
							/>
						</form>
					) : (
						todo
					)}
				</div>
				<div className='flex items-center gap-3 '>
					<FaCheck
						title='Done'
						size={30}
						onClick={() => handlerDoneTodo(todoId)}
					/>

					<MdEdit
						title='Edit'
						size={30}
						onClick={() => handlerEditTextTodo(todoId, todo)}
					/>

					<MdDelete
						title='Delete'
						size={30}
						onClick={() => handlerDeleteTodo(todoId)}
					/>
				</div>
			</div>
		</Draggable>
	)
}

export default Todo
