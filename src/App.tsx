import './App.css'
import ActionButton from './components/ActionButton/ActionButton'
import ContextProviderTodo from './components/Contexts/ContextProviderTodo'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
	return (
		<ContextProviderTodo>
			<>
				<TodoForm />
				<ActionButton />
				<TodoList />
			</>
		</ContextProviderTodo>
	)
}

export default App
