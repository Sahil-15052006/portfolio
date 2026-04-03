import { Link } from "react-scroll";
import ThemeChanger from "./ThemeChanger";
import DownloadResume from "./DownloadResume";


export default function Nav(){

    return(
        <>
            <nav className=" flex w-full p-2 justify-between items-center bg-(--primary)/10 text-(--light) cursor-pointer rounded px-5">
                <div className=" hidden sm:block font-mono h-fit w-fit font-semibold tracking-wider hover:scale-105 transition rounded-lg text-(--primary) " >
                    <Link to="hero" smooth="true" offset={-60} className="hover:text-(--primary) hover:scale-110 animate-pulse">{'<SAHIL />'}</Link>
                </div>
                <div  className="flex flex-col transition-all items-center">
                    <div className="flex justify-center gap-5 items-center text-md font-medium duration-300 transition cursor-pointer">
                            <Link to="hero" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Home</Link>
                            <Link to="projects" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Projects</Link>
                            <Link to="skills" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Skills</Link>
                            <Link to="contact" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Contact</Link>
                    </div>
                </div>
                <div className="hidden sm:flex gap-5 ">
                    <ThemeChanger/>
                    <DownloadResume/>
                </div>
            </nav>
        </>
    )
}
