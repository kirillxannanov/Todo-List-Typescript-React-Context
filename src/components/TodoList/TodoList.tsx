import { FC, useContext } from 'react'
import { ContextTodo } from '../Contexts/ContextProviderTodo'
import Todo from '../Todo/Todo'

const TodoList: FC = () => {
	const { todoList } = useContext(ContextTodo)

	const count: number = todoList.filter(el => el.isDone).length

	return (
		<div>
			{todoList.map((el, index) => (
				<Todo
					key={el.id}
					todo={el.text}
					todoId={el.id}
					isDone={el.isDone}
					isEdit={el.isEdit}
					color={el.color}
					defaultPos={el.defaultPos}
					index={index}
				/>
			))}
			<p className='flex justify-center text-3xl font-bold mt-5 text-white'>
				{count > 0 && (
					<p>{`Complete ${count} ${count > 1 ? 'todos' : 'todo'}`}</p>
				)}
			</p>
		</div>
	)
}

export default TodoList
