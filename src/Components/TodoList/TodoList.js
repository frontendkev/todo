import CheckIcon from "../../svg/CheckIcon"
import RemoveIcon from "../../svg/RemoveIcon"


export default function TododList({ tasks, removeTask, completeTask }) {
    const sortedTasks = tasks.sort((a, b) => {
        let timeA = a.added
        let timeB = b.added
        if (timeA > timeB) {
            return -1
        }
        else if (timeA < timeB) {
            return 1
        }
        return 0
    })
    return (
        <section className="relative w-full h-fit flex flex-col gap-y-0 overflow-hidden pb-2">
            {
                sortedTasks.map((task, index) => {
                    return (
                        <div key={index} className='relative w-full h-[4em] landscape:md:h-[4em] landscape:lg:h-[4em] landscape:pt-4 landscape:lg:pt-1 landscape:md:pt-1 pl-2 shadow-bottom pt-1'>

                            <div className="relative w-full h-full flex flex-row justify-between items-center">
                                <div className="relative w-full h-full flex flex-col justify-center items-start leading-[1.3em] md:leading-[1.5em] landscape:leading-[1.3em] landscape:lg:leading-[1.5em]">
                                    <small className="relative text-start text-rose-400 capitalize font-quicksandlight text-[0.6em] md:text-[0.7em]">
                                        {task.added}
                                    </small>
                                    <b className="relative text-gray-300 font-quicksandregular capitalize text-[0.7em] md:text-[0.8em] leading-[1.2em]">
                                        {task.task}
                                    </b>
                                </div>

                                <div className="relative w-[7em] h-[2.5em] md:h-[4em] flex flex-row items-center justify-center gap-x-4">
                                    <button onClick={() => completeTask(task.id)} className={`relative w-[1.5em] md:w-[2em] h-[1.5em] md:h-[2em] rounded-full shadow-light ${task.complete ? 'bg-green-600' : 'bg-rose-600'} flex items-center justify-center transition-all duration-300 ease-in-out`}>
                                        <CheckIcon />
                                    </button>
                                    <button onClick={() => removeTask({ type: 'removeitem', id: task.id })} className="relative w-[1.5em] md:w-[2em] h-[1.5em] md:h-[2em] rounded-full shadow-light bg-rose-600 flex items-center justify-center">
                                        <RemoveIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}