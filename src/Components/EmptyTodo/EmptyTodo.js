import EmptyIcon from "../../svg/EmptyIcon";


export default function EmptyTodo({message}) {
    return (
        <section className="relative w-full h-full flex flex-col items-center pt-[4em]">
            <div className="relative w-[10em] h-[10em]">
                <EmptyIcon />
            </div>

            <div className="relative w-full h-[4em] pt-2">
                <h1 className="relative text-[0.8em] text-gray-300 font-quicksandbold uppercase text-center opacity-[0.8]">
                    {message}
                </h1>
            </div>
        </section>
    )
}