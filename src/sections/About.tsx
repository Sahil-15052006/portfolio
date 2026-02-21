import { GraduationCapIcon, MapIcon } from "lucide-react";
import DownloadResume from "../components/DownloadResume";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export default function About() {
    const [imageURl,setImageURl]=useState("")
    const fetchProfileImg=async()=>{
        const {data:urlData} = supabase
        .storage
        .from("profileImage")
        .getPublicUrl("profilePic.jpeg")
        setImageURl(urlData.publicUrl)
    }
    useEffect(()=>{
        fetchProfileImg()
    },[])
  return (
    <div id="about" className="bg-(--dark) text-(--light) flex flex-col justify-center items-center py-10 transition-all">
        <div className="text-4xl sm:text-6xl font-bold w-full text-center p-5 ">About Me</div>
        <div className="text-(--secondary) sm:text-(--secondary) text-md sm:text-2xl font-light text-center px-5">Get to know me better</div>

        <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="p-10 flex items-center justify-center">
                <img src={imageURl} alt="Profile image" className="h-fit w-100 rounded-full border-2 shadow-lg border-(--secondary)" />
            </div>

            <div className="space-y-2 p-5 text-center lg:text-start flex flex-col justify-center items-center lg:items-start">

                <h1 className="text-4xl font-medium"> Frontend Developer</h1>

                <div className="flex  text-xl text-(--secondary)">
                    I'm a Computer Science student passionate about building modern web applications. I enjoy turning ideas into interactive, user-friendly experiences using React and backend services like Supabase. Currently focused on improving my full-stack development skills and building real-world projects.</div>

                <div className=" flex items-center justify-center p-1 w-fit h-fit gap-2 text-(--secondary)">
                    <GraduationCapIcon className=" text-(--primary) "/>
                    <span>BE Computer Science</span>     
                </div>

                <div className=" flex items-center justify-center p-1 w-fit h-fit gap-2 text-(--secondary)">
                    <MapIcon className="text-(--primary) "/>
                    <span>Kharghar, Navi Mumbai</span>
                </div>

                <DownloadResume/>
            </div>
        </div>
    </div>
  )
}
