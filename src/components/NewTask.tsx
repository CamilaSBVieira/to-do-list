import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { TaskType } from '../App'
import styles from './NewTask.module.css'

interface NewTaskProps {
    onAddNewTask: (task: TaskType) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {

    const [newTask, setNewTask] = useState('')

    const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleAddNewTask = (e: FormEvent) => {
        e.preventDefault()
        if(newTask.length === 0) {
            return
        }
        onAddNewTask({id: Date.now(), content: newTask, completed: false})
        setNewTask('')
    }

    return (
        <form
            onSubmit={handleAddNewTask}
            className={styles.newTask}>
            <input
                value={newTask}
                onChange={handleNewTaskChange}
                className={styles.newTaskInput}
                placeholder="Adicione uma nova tarefa"
            />
            <button
                className={styles.newTaskButton}
                type="submit"
            >
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}