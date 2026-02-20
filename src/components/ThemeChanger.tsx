import { Moon, Sun } from "lucide-react"
import {useState } from "react"

export default function ThemeChanger() {
    const [ lightTheme,setLightTheme ]=useState(false)
    const toggleTheme=()=>{
        const rootElement=document.getElementById('root')
        const heroElement=document.getElementById('hero')
        rootElement?.classList.toggle("light")
        heroElement?.classList.toggle("gradient-dark")
        heroElement?.classList.toggle("gradient-light")
        setLightTheme(!lightTheme)
    }
  return (
    <div 
        className="bg-(--secondary)/20 hover:text-(--primary) flex p-2 rounded-full justify-center items-center text-center duration-300"
        onClick={()=>toggleTheme()}>
        <Moon className={`${lightTheme?"flex":"hidden"} `}/>
        <Sun className={`${lightTheme?"hidden":"flex"}  `}/>         
    </div> 
  )
}
