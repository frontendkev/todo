import Services from "../../Services/Services";
import SendIcon from "../../svg/SendIcon";
import { useState } from "react";


export default function CreateToDo() {
    const { createTask } = Services()
    const [task, setTask] = useState('')

    function create(e) {
        e.preventDefault()
        createTask(task)
        return setTask(() => '')
    }
    return (
        <form onSubmit={(e) => create(e)} className="relative w-full lg:w-[70%] shadow-light portrait:h-[45px] landscape:h-[2.6em] md:h-[3em] overflow-hidden flex flex-row justify-between rounded-[0.2em] bg-mygray">
            <div className="relative w-[85%] md:w-[90%] h-full overflow-hidden">
                <input value={task} onChange={(e) => setTask(() => e.target.value)} className="relative w-full h-full text-start pl-2 focus:outline-0 bg-mygray text-gray-300 capitalize font-quicksandsemibold text-[0.8em]" placeholder="create-to-do..." required />
            </div>
            <div className="relative w-[13%] sm:w-[9%] md:w-[7%] landscape:w-[8%] h-full flex items-center justify-center">
                <button type="submit" className="relative w-[1.9em] h-[1.9em] md:w-[2em] md:h-[2em] bg-rose-500 rounded-full flex items-center justify-center shadow-light">
                    <SendIcon />
                </button>
           </div>
        </form>
   )
}
