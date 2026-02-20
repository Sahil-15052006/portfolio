import { DownloadIcon } from "lucide-react";
import supabase from "../utils/supabase";

export default function DownloadResume() {

    const handleDownload = async() => {

        const {data}=supabase
        .storage
        .from("resume")
        .getPublicUrl("resume.pdf")

        window.open(data.publicUrl,"_blank")
        console.log('fetched resume');

    }
  return (
    <button 
        onClick={()=>handleDownload()}
        className="flex flex-row items-center justify-center text-sm bg-(--primary) font-bold space-x-2 p-3 rounded-xl w-fit h-fit hover:scale-105 transition duration-300">
        <DownloadIcon className="h-5 w-5"/>
        <span>Get Resume</span>
    </button>
  )
}
