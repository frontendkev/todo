

export default function BottomLink({filterTodo, title, count, filter, currentPage, page}) {
    
    return (
        <div className="relative w-fit h-full flex flex-row items-center gap-x-1">
            <button onClick={() => filterTodo(filter)} className={`relative capitalize font-quicksandsemibold ${currentPage === page ? 'text-rose-500':'text-gray-300'} text-[0.6em] md:text-[0.8em] transition-all duration-300 ease-in-out`}>
                {
                    title
                }
            </button>
            <div className="relative w-[1em] md:w-[1.3em] h-[1em] md:h-[1.3em] bg-rose-500 rounded-full flex justify-center items-center shadow-light">
                <small className="relative font-quicksandsemibold text-[0.6em] md:text-[0.7em] text-gray-200 shadow-light">
                    {
                        count
                    }
                </small>
            </div>
        </div>
    )
}