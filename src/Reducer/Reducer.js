import { createContext, useReducer } from "react";


export const Todo = createContext()
export const TodoDispatch = createContext()
export const SAVETASK = 'SAVETASK'
export const FETCHTASKS = 'FETCHTASKS'
export const DELETETASK = 'DELETETASK'
export const COMPLETETASK = 'COMPLETETASK'
export const SHOWTASKS = 'SHOWTASKS'
export const initialState = {
    tasks: [],
    count: 0,
    activeTasks: [],
    completedTasks: [],
    currentPage: 'all'
}


const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case FETCHTASKS: {
            const active = payload.filter(task => task.complete === false)
            const complete = payload.filter(task => task.complete === true)
            return {
                ...state, tasks : payload, count: payload.length, activeTasks: active, completedTasks: complete
            }
        }
        case SAVETASK: {
            const stringifyTask = JSON.stringify(payload)
            localStorage.setItem('tasks', stringifyTask)
            const active = payload.filter(task => task.complete === false)
            const complete = payload.filter(task => task.complete === true)
            return {
                ...state, tasks : payload, count: payload.length, activeTasks: active, completedTasks: complete
            }
        }
        case COMPLETETASK: {
            const stringifyTask = JSON.stringify(payload)
            localStorage.setItem('tasks', stringifyTask)
            const active = payload.filter(task => task.complete === false)
            const complete = payload.filter(task => task.complete === true)
            return {
                ...state, tasks : payload, count: payload.length, activeTasks: active, completedTasks: complete
            }
            }
        case DELETETASK: {
            const active = payload.filter(task => task.complete === false)
            const complete = payload.filter(task => task.complete === true)
            return {
                ...state, tasks : payload, count: payload.length, activeTasks:active, completedTasks: complete
            }
        }
        case SHOWTASKS: {
            return {
                ...state, tasks: payload.tasks, currentPage: payload.currentPage
            }
            }
        default: {
            return state
            }
    }
}

export default function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <Todo.Provider value={{ ...state }}>
            <TodoDispatch.Provider value={dispatch}>
                {children}
            </TodoDispatch.Provider>
        </Todo.Provider>
    )
}

