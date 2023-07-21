import { useContext } from "react";
import { Todo } from "../../Reducer/Reducer";
import Services from "../../Services/Services";
import EmptyTodo from "../EmptyTodo/EmptyTodo";
import TododList from "../TodoList/TodoList";
import PageContainer from '../PageContainer/PageContainer';


export default function ToDos() {
    const todo = useContext(Todo)
    const { deleteTask, completeTask } = Services()

    if (todo.currentPage === 'active') {
        return (
            <PageContainer>
                {
                    todo.activeTasks.length === 0 ?
                        <EmptyTodo message={'you have no active task'} /> :
                        <TododList tasks={todo.activeTasks} removeTask={deleteTask} completeTask={completeTask} />
                }  
            </PageContainer>
        )
    }

    if (todo.currentPage === 'completed') {
        return (
            <PageContainer>
                {
                    todo.completedTasks.length === 0 ?
                        <EmptyTodo message={'you have no completed task'} /> :
                        <TododList tasks={todo.completedTasks} removeTask={deleteTask} completeTask={completeTask} />
                }
           </PageContainer>
        )
    }


    return (
        <PageContainer>
            {
                todo.tasks.length === 0 ?
                    <EmptyTodo message={'you currently have no task'} /> :
                    <TododList tasks={todo.tasks} removeTask={deleteTask} completeTask={completeTask} />
            }
        </PageContainer>
    )
}