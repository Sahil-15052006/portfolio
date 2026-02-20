import { Link } from "react-scroll";
import ThemeChanger from "./ThemeChanger";

export default function Nav(){

    return(
        <>
            <nav className=" flex w-full justify-between p-5 sm:px-15 items-center bg-(--dark) text-(--light) cursor-pointer">
                <div className=" hidden sm:block font-mono h-fit w-fit font-semibold tracking-wider hover:scale-105 transition rounded-lg text-(--primary) " >
                    <Link to="hero" smooth="true" offset={-60} className="hover:text-(--primary) hover:scale-110 animate-pulse">{'<SAHIL />'}</Link>
                </div>
                <div className="sm:hidden font-mono h-fit w-fit font-semibold tracking-wider hover:scale-105 transition rounded-lg text-(--primary) " >
                    <Link to="hero" smooth="true" offset={-60} className="hover:text-(--primary) hover:scale-110 animate-pulse">{'</>'}</Link>

                </div>
                <div  className="hidden sm:flex flex-col transition-all hover:h-auto justify-center items-center ">
                        <ul className="flex flex-row justify-center items-center gap-2 sm:gap-5 text-md font-medium sm:font-bold duration-300 transition cursor-pointer">
                            <Link to="hero" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Home</Link>
                            <Link to="projects" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Projects</Link>
                            <Link to="skills" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Skills</Link>
                            <Link to="about" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">About</Link>
                            <Link to="contact" smooth="true" offset={-40} className="hover:text-(--primary) hover:scale-110 duration-300">Contact</Link>
                        </ul>
                </div>
                <ThemeChanger/>
            </nav>
        </>
    )
}
