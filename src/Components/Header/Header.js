
export default function Header() {
    return (
        <div className="relative w-fit h-full float-left flex items-center justify-center landscape:md:pb-2">
            <h1 className="relative text-[1em] lg:text-[1.4em] landscape:md:text-[1em] landscape:lg:text-[1.4em] text-gray-300 font-quicksandbold uppercase leading-[0.9em] text-left">
                <span className="text-[0.7em] md:text-[0.5em] lowercase font-quicksandsemibold text-orange-500">
                    special
                </span>
                <br />
                todo

            </h1>
        </div>
    )
}