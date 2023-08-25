import { useContext } from "react"
import { Todo } from "../../Reducer/Reducer"
import Services, { SHOWACTIVE, SHOWCOMPLETED, SHOWALL } from "../../Services/Services"
import BottomLink from "../BottomLink/BottomLink"



export default function BottomNav() {
    const todo = useContext(Todo)
    const { filterTodo, deleteTask } = Services()
    return (
        <section className="relative w-full lg:w-[70%] portrait:h-[3em] landscape:h-[2em] landscape:lg:h-[3em] shadow-light pl-2 pr-2 flex flex-row justify-between">
            <div className="relative w-fit h-full flex flex-row items-center">
                <small className="relative capitalize font-quicksandsemibold text-gray-300 text-[0.7em] md:text-[0.8em]">
                    {
                        todo.activeTasks.length + ' '
                    }
                    {
                        todo.activeTasks.length > 1 ? 'tasks left' : 'task left'
                    }
                </small>

            </div>

            <div className="relative w-fit h-full flex flex-row gap-x-2 sm:gap-x-6 md:gap-x-4 items-center">
                <BottomLink filterTodo={filterTodo} title='all' count={todo.count} filter={SHOWALL} currentPage={todo.currentPage} page={'all'} />
                
                <BottomLink filterTodo={filterTodo} title='active' count={todo.activeTasks.length} filter={SHOWACTIVE} currentPage={todo.currentPage} page={'active'} />

                <BottomLink filterTodo={filterTodo} title='completed' count={todo.completedTasks.length} filter={SHOWCOMPLETED} currentPage={todo.currentPage} page={'completed'} />

               
            </div>

            <div className="relative w-fit h-full flex items-center">
                <button onClick={() => deleteTask({type: 'removecompleted'})} className="relative capitalize font-quicksandsemibold text-gray-300 text-[0.7em] md:text-[0.8em] hover:text-rose-500 transition-all duration-300 ease-in-out">

                    clear completed

                </button>
            </div>
        </section>
    )
}
