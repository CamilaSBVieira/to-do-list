import { useEffect, useState } from 'react'
import './assets/styles/global.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

export interface TaskType {
  id: number;
  content: string;
  completed: boolean;
}

export function App() {

  let localStorageTasks = localStorage.getItem('tasks')

  const [tasks, setTasks] = useState(typeof localStorageTasks === 'string' ? JSON.parse(localStorageTasks) : [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (task: TaskType) => setTasks((prevState: TaskType[]) => [...prevState, task])

  const deleteTask = (id: number) => setTasks((prevState: TaskType[]) => prevState.filter((el: TaskType) => el.id !== id))

  const deleteAllTasks = () => setTasks([])

  const deleteCompletedTasks = () => setTasks((prevState: TaskType[]) => prevState.filter(el => !el.completed))

  const toogleTaskCompletion = (id: number) => {
    setTasks((prevState: TaskType[]): TaskType[] => {
      return prevState.map((el: TaskType) => {
        if (el.id === id) {
          return { ...el, completed: !el.completed }
        } else {
          return el
        }
      })
    })
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='container'>
        <NewTask onAddNewTask={addNewTask} />
        <Tasks
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toogleTaskCompletion}
          onDeleteAllTasks={deleteAllTasks}
          onDeleteCompletedTasks={deleteCompletedTasks}
        />
      </main>
    </>
  )
}
