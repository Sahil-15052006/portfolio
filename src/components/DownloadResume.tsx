import { DownloadIcon } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";


export default function DownloadResume() {

  const { portfolioData }= usePortfolio()

    const handleDownload = () => {
      window.open(portfolioData?.profile.resumeURL,"_blank")
    }

  return (
    <button
        onClick={()=>handleDownload()}
        className="flex flex-row items-center justify-center text-sm bg-(--dark) text-(--primary) border border-(--primary) font-mono space-x-2 p-2 rounded w-fit h-fit hover:bg-(--primary)/10 transition duration-300 hover:scale-110 bounce">
        <DownloadIcon className="h-5 w-5"/>
        <span>Resume</span>
    </button>
  )
}
