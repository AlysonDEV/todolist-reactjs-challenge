import { type FormEvent, useState } from 'react'
import { LuCirclePlus } from 'react-icons/lu'

import {
	IconCheckEmpty,
	IconChecked,
	IconTrash,
	MainContainer,
	NewTaskForm,
	TaskList,
	TaskListContainer,
	TaskListEmpty,
	TaskListHeaderContainer,
	TaskListHeaderInfo,
	TaskListItem,
} from './styles'

import ImgClipboard from '/src/assets/clipboard.png'

interface Task {
	id: string
	title: string
	isCompleted: boolean
}

export function Main() {
	const [tasks, setTasks] = useState<Task[]>([])
	const [newTaskTitle, setNewTaskTitle] = useState('')

	const amountOfTasksCreated = tasks.length
	const amountOfTasksCompleted = tasks.filter(
		(task) => task.isCompleted,
	).length

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault()
		if (newTaskTitle.trim() === '') return
		const newId = crypto.randomUUID().toString()

		setTasks((prevState) => [
			...prevState,
			{
				id: newId,
				title: newTaskTitle.trim(),
				isCompleted: false,
			},
		])

		setNewTaskTitle('')
	}

	function handleToogleTaskCompletion(id: string) {
		setTasks((prevState) =>
			prevState.map((task) => {
				if (task.id === id) {
					return {
						...task,
						isCompleted: !task.isCompleted,
					}
				}

				return { ...task }
			}),
		)
	}

	function handleDeleteTask(id: string) {
		setTasks((prevState) => [...prevState.filter((task) => task.id !== id)])
	}

	return (
		<MainContainer>
			<NewTaskForm onSubmit={handleCreateNewTask}>
				<input
					type="text"
					name="task"
					placeholder="Adcionar um nova tarefa"
					value={newTaskTitle}
					onChange={(event) => setNewTaskTitle(event.target.value)}
					required
				/>
				<button type="submit">
					Criar
					<LuCirclePlus />
				</button>
			</NewTaskForm>

			<TaskListContainer>
				<TaskListHeaderContainer>
					<TaskListHeaderInfo>
						<h2>Tarefas criadas</h2>
						<span>{amountOfTasksCreated}</span>
					</TaskListHeaderInfo>

					<TaskListHeaderInfo>
						<h2>Concluídas</h2>
						<span>{`${amountOfTasksCompleted} de ${amountOfTasksCreated}`}</span>
					</TaskListHeaderInfo>
				</TaskListHeaderContainer>

				<TaskList>
					{tasks.length === 0 ? (
						<TaskListEmpty>
							<img
								src={ImgClipboard}
								alt="Desenho de um prancheta que vai represetar um lista vazia/"
							/>
							<p>
								<strong>
									Você ainda não tem tarefas cadastradas
								</strong>
								<br />
								Crie tarefas e organize seus itens a fazer
							</p>
						</TaskListEmpty>
					) : (
						tasks.map((task) => {
							return (
								<TaskListItem
									key={task.id}
									isCompleted={task.isCompleted}
								>
									<input
										type="checkbox"
										id={`task-${task.id}`}
										checked={task.isCompleted}
										onChange={() =>
											handleToogleTaskCompletion(task.id)
										}
										hidden
									/>

									<label htmlFor={`task-${task.id}`}>
										<span>
											{task.isCompleted ? (
												<IconChecked />
											) : (
												<IconCheckEmpty />
											)}
										</span>
										{task.title}
									</label>
									<button
										type="button"
										onClick={() =>
											handleDeleteTask(task.id)
										}
									>
										<IconTrash />
									</button>
								</TaskListItem>
							)
						})
					)}
				</TaskList>
			</TaskListContainer>
		</MainContainer>
	)
}
