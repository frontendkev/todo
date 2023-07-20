import { useContext, useId } from "react"
import { SAVETASK, TodoDispatch, FETCHTASKS, DELETETASK , COMPLETETASK, SHOWTASKS} from "../Reducer/Reducer"

export const SHOWACTIVE = 'SHOWACTIVE'
export const SHOWALL = 'SHOWALL'
export const SHOWCOMPLETED = 'SHOWCOMPLETED'

export default function Services() {

    const todoDispatch = useContext(TodoDispatch)
    let foundTasks = localStorage.getItem('tasks')
    const id = useId()

    function fetchTasks() {
        if (foundTasks) {
            let tasks = JSON.parse(foundTasks)
            return todoDispatch({
                type: FETCHTASKS,
                payload: tasks
            })
        }
        return;
    }

    function createTask(data) {
        let time = new Date().toLocaleString('en-US', { year: 'numeric', month: 'short', day: '2-digit', date: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
        let task = {
            id: data+id,
            task: data,
            complete: false,
            added: time
        }
        if (foundTasks) {
            let parsedTasks = JSON.parse(foundTasks)
            let tasks = [...parsedTasks, task]
            return todoDispatch({
                type: SAVETASK,
                payload: tasks
            })
        }
        const tasks = []
        const item = [...tasks, task]
        const stringifyTask = JSON.stringify(item)
        localStorage.setItem('tasks', stringifyTask)
        return todoDispatch({ type: SAVETASK, payload: item})

    }

    function deleteTask(payload) {
        if (foundTasks) {
            let parsedTasks = JSON.parse(foundTasks)
            switch (payload.type) {
                case 'removeitem': {
                    let tasks = parsedTasks.filter(item => item.id !== payload.id)
                    let stringifyTasks = JSON.stringify(tasks)
                    localStorage.setItem('tasks', stringifyTasks)
                    todoDispatch({
                        type: DELETETASK,
                        payload: tasks
                    })
                    break;
                }
                case 'removecompleted': {
                    let tasks = parsedTasks.filter(item => item.complete === false)
                    let stringifyTasks = JSON.stringify(tasks)
                    localStorage.setItem('tasks', stringifyTasks)
                    todoDispatch({
                        type: DELETETASK,
                        payload: tasks
                    })
                    break;
                }
                default: {
                    return payload.type
                    }
            }
        }
    }

    function completeTask(id) {
        if (foundTasks) {
            const parsedTasks = JSON.parse(foundTasks)
            let tasks = parsedTasks.map(item => item.id === id ? { ...item, complete: true } : { ...item })

            return todoDispatch({
                type: COMPLETETASK,
                payload: tasks
            })
        }
    }

    function filterTodo(filter) {
        if (foundTasks) {
            const tasks =JSON.parse(foundTasks)
            switch (filter) {
                case SHOWACTIVE: {
                    let activeTasks = tasks.filter(task => task.complete === false)
                    todoDispatch({
                        type: SHOWTASKS,
                        payload: {
                            tasks: activeTasks,
                            currentPage: 'active'
                        }
                    })
                    break;
                }
                case SHOWCOMPLETED: {
                    let activeTasks = tasks.filter(task => task.complete === true)
                    todoDispatch({
                        type: SHOWTASKS,
                        payload: {
                            tasks: activeTasks,
                            currentPage: 'completed'
                        }
                    })
                    break;
                }
                case SHOWALL: {
                    todoDispatch({
                        type: SHOWTASKS,
                        payload: {
                            tasks: tasks,
                            currentPage: 'all'
                        }
                    })
                    break;
                }
                default: {
                    return filter
                }
            }
        }
        return;
    }

    return {
        fetchTasks,
        createTask,
        deleteTask,
        completeTask,
        filterTodo
    }
}