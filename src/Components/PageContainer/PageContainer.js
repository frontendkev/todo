

export default function PageContainer({children}) {
    
    return (
        <section className="relative w-full md:w-full lg:w-[70%] h-[80%] lg:h-[75%] landscape:h-[65%] landscape:lg:h-[75%] mx-auto z-[15] overflow-y-scroll overflow-hidden no-scrollbar bg-gradient-to-r from-mygray via-myray to-transparent">
            {children}
        </section>
    )
}