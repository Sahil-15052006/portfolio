import { LaptopIcon, LightbulbIcon, ServerCogIcon, WrenchIcon } from "lucide-react";
import SkillBox from "../components/SkillBox";
import supabase from "../utils/supabase";
import { useEffect, useState } from "react";

export default function Skills() {
   const [skills,setSkills] = useState<any[]>([])

    const fetchData = async()=>{
        const {data,error} = await supabase
        .from("skills")
        .select("*")
        
        if (error) {
            console.error(error)
            return
        }
        setSkills(data)
        console.log('data fetched');
        
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div id="skills" className="bg-(--background) text-(--light) flex flex-col justify-center items-center py-10 transition-all">
        <div className="text-4xl sm:text-6xl font-bold w-full text-center p-5">Skills & Technology</div>
        <div className="text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">My technical toolkit</div>
        <div className="grid w-full p-5 sm:p-20 grid-cols-1 sm:grid-cols-2 gap-5">
            <SkillBox heading={"Frontend"} icon={LaptopIcon} skills={skills} />
            <SkillBox heading={"Backend"} icon={ServerCogIcon} skills={skills} />
            <SkillBox heading={"Tools"} icon={WrenchIcon} skills={skills} />
            <SkillBox heading={"Learning"} icon={LightbulbIcon} skills={skills} />
        </div>
    </div>
  )
}
