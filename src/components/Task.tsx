import { Trash, Check } from 'phosphor-react'
import { TaskType } from '../App'
import styles from './Task.module.css'
import { deleteFunction, toggleTask } from './Tasks';

interface TaskProps {
    task: TaskType;
    onDeleteTask: deleteFunction;
    onToggleTask: toggleTask;
}

export function Task({ task, onDeleteTask, onToggleTask }: TaskProps) {

    const handleDeleteTask = () => {
        onDeleteTask(task.id)
    }

    const handleTaskCompletion = () => {
        onToggleTask(task.id)
    }

    return (
        <div className={styles.task}>
            <button
                onClick={handleTaskCompletion}
                title="Deletar tarefa"
                className={task.completed ? styles.taskCheckboxChecked : styles.taskCheckbox}
            >
                <Check size={14.82} />
            </button>
            <p className={styles.taskContent}>{task.content}</p>
            <button
                onClick={handleDeleteTask}
                className={styles.taskDeleteButton}
            >
                <Trash size={24} />
            </button>
        </div>
    )
}