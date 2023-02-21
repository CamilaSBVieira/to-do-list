import { TaskType } from '../App'
import { Task } from './Task'
import { Trash, TrashSimple } from 'phosphor-react'
import emptyList from '../assets/images/emptyList.png'
import styles from './Tasks.module.css'

export type deleteFunction = (id: number) => void

export type toggleTask = (id: number) => void

type deleteTasks = () => void

interface TasksProps {
  tasks: TaskType[];
  onDeleteTask: deleteFunction;
  onToggleTask: toggleTask;
  onDeleteAllTasks: deleteTasks;
  onDeleteCompletedTasks: deleteTasks;
}

export function Tasks({ tasks, onDeleteTask, onToggleTask, onDeleteAllTasks, onDeleteCompletedTasks }: TasksProps) {

  let numberOfTasks: number = tasks.length
  let numberOfCompletedTasks: number = 0

  tasks.forEach(task => {
    if (task.completed) {
      numberOfCompletedTasks++
    }
  })

  const handleDeleteAllTasks = () => {
    onDeleteAllTasks()
  }

  const handleDeleteCompletedTasks = () => {
    onDeleteCompletedTasks()
  }

  return (
    <section className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <p className={styles.tasksCreated}>Tarefas criadas <span>{numberOfTasks}</span></p>
        <p className={styles.tasksFinished}>Concluídas <span>{numberOfCompletedTasks} de {numberOfTasks}</span></p>
      </header>
      {tasks.length === 0 &&
        <div className={styles.taskListEmpty}>
          <img src={emptyList} />
          <h3 className={styles.taskListEmptyTitle}>Você ainda não tem tarefas cadastradas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        ||
        <>
          <div>
            {tasks.sort((task: TaskType) => task.completed ? 1 : -1)
              .map((task: TaskType) => <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />)}
          </div>
          <footer>


            <button
              onClick={handleDeleteAllTasks}
              className={styles.footerButton}
            >
              Excluir todas tarefas
              <Trash size={24} />
            </button>
            <button
              onClick={handleDeleteCompletedTasks}
              className={styles.footerButton}
            >
              Excluir tarefas concluídas
              <TrashSimple size={24} />
            </button>
          </footer>
        </>
      }
    </section>
  )
}