

export default function BackgroundImage({image}) {
    
    return (
        <>
            <figure className="absolute w-full h-full overflow-hidden z-[5] bg-mygray">
                <img src={image} className='relative w-full h-full object-cover object-center opacity-[0.5]' alt="background cover" />
            </figure>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-mygray to-mygray overflow-hidden z-[10] opacity-[0.8]">
            </div>
        </>
    )
}