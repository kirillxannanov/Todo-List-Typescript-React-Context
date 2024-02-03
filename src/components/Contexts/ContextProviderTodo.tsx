import {
	Dispatch,
	FC,
	ReactNode,
	createContext,
	useEffect,
	useState,
} from 'react'

export interface IContext {
	todoList: {
		id: string
		text: string
		isDone: boolean
		isEdit: boolean
		color: string
		defaultPos: {
			x: number
			y: number
		}
	}[]

	setTodoList: Dispatch<
		React.SetStateAction<
			{
				id: string
				text: string
				isDone: boolean
				isEdit: boolean
				color: string
				defaultPos: {
					x: number
					y: number
				}
			}[]
		>
	>
	todo: string
	setTodo: Dispatch<React.SetStateAction<string>>
}

interface IContextProviderTodo {
	children?: ReactNode
}

export const ContextTodo = createContext<IContext>({
	todoList: [],
	setTodoList: () => {},
	todo: '',
	setTodo: () => {},
})

const ContextProviderTodo: FC<IContextProviderTodo> = ({ children }) => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem('todoList') || '""') || []
	)
	const [todo, setTodo] = useState<string>('')

	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList))
	}, [todoList])

	return (
		<ContextTodo.Provider value={{ todoList, setTodoList, todo, setTodo }}>
			{children}
		</ContextTodo.Provider>
	)
}

export default ContextProviderTodo
