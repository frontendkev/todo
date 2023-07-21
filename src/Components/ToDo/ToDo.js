import { useEffect } from "react";
import Services from "../../Services/Services";
import BottomNav from "../BottomNav/BottomNav";
import CreateToDo from "../CreateToDo/CreateToDo";
import ToDos from "../ToDos/ToDos";


export default function ToDo() {
const {fetchTasks} = Services()
    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])
    return (
        <section aria-label="create-todo" className="relative w-[90%] md:w-[90%] lg:w-[70%] mx-auto h-full flex flex-col items-center pt-3 z-[15] gap-y-2 md:gap-y-6 lg:gap-y-2 landscape:gap-y-2">
            <CreateToDo />
            <ToDos />
            <BottomNav />
        </section>
    )
}