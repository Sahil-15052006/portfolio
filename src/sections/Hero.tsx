import { ArrowRightIcon, CodeIcon, DoorOpenIcon, LaptopIcon, MailIcon, RocketIcon} from "lucide-react";
import { Link } from "react-scroll";


export default function Hero(){
    return(
        <div id="hero" className= "gradient-dark text-(--light) h-full w-full flex flex-col items-center justify-start duration-300 space-y-2 sm:space-y-5 transition px-2 py-10 sm:px-10">
            <div className="animate-pulse flex text-(--primary) opacity-85 border-2 border-(--primary) bg-transparent text-xs sm:text-lg 
                            font-bold rounded-xl sm:rounded-full p-2 sm:px-5  sm:py-2 w-fit h-fit space-x-3 items-center duration-300">
                    <DoorOpenIcon/>
                    <span>Available for opportunities</span>
            </div>
            <div className="text-6xl sm:text-8xl font-bold w-full text-center p-5">
                Sahil Sawant
            </div>
            <div className="text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">
                Building fast, user-focused web apps
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-x-5 w-full justify-center items-center sm:items-start p-5">
                <Link to="projects" offset={-40} smooth={true} duration={500} >
                    <button className="t bg-(--primary) text-sm font-light flex items-center justify-center border border-transparent 
                            rounded-lg sm:rounded-xl bg-primary w-37.5 sm:w-50 sm:py-4 sm:text-lg h-fit p-3
                            transition duration-300 space-x-1.5 sm:hover:font-bold hover:-translate-y-1 hover:scale-110">
                        <span>View Projects</span>
                        <ArrowRightIcon className="h-5"/> 
                    </button>
                </Link>
                <Link to="contact" offset={-40} smooth={true} duration={500}>
                    <button className=" text-(--primary)  text-sm  font-light flex items-center justify-center border border-(--primary)
                            rounded-lg sm:rounded-xl bg-transparent opacity-90 w-37.5 sm:w-50 sm:py-4 sm:text-lg h-fit p-3
                            transition duration-300 space-x-1.5 sm:hover:font-bold ease-in-out hover:-translate-y-1 hover:scale-110">
                        <MailIcon className="h-5"/> 
                        <span>Contact Me</span>
                    </button>
                </Link>
            </div>
            <div className="floating-effect grid w-fit grid-rows-3 sm:grid-cols-3 gap-3 justify-center items-center">
                <span className=" w-full m-auto bg-(--dark) text-(--light) rounded-xl flex space-x-2 p-3 
                text-sm sm:text-md sm:p-3 border border-(--secondary) transition-all items-center justify-center">
                    <LaptopIcon className="animate-pulse"/>
                    <span>Open for internships</span>
                </span>
                <span className=" w-full m-auto bg-(--dark) text-(--light) rounded-xl flex space-x-2 p-3 
                text-sm sm:text-md sm:p-3 border border-(--secondary) transition-all items-center justify-center">
                    <CodeIcon className="animate-pulse"/>
                    <span>Frontend Developer</span>
                </span>
                <span className=" w-full m-auto bg-(--dark) text-(--light) rounded-xl flex space-x-2 p-3 
                text-sm sm:text-md sm:p-3 border border-(--secondary) transition-all items-center justify-center">
                    <RocketIcon className="animate-pulse"/>
                    <span>Currently building projects</span>
                </span>
            </div>
        </div>
    )
}