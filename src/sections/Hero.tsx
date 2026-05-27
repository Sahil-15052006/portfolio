import { MailIcon} from "lucide-react";
import { Link } from "react-scroll";
import SocialMediaLinks from "../components/SocialMediaLinks";
import DownloadResume from "../components/DownloadResume";
import { usePortfolio } from "../context/PortfolioContext";



export default function Hero(){

    const { portfolioData } = usePortfolio()
    const profile = portfolioData?.profile

    return(
        <div id="hero" className= "gradient-dark text-(--light) min-h-screen pt-20 gap-10 px-5 sm:px-20 w-full grid grid-cols-1 sm:grid-cols-2 justify-between duration-300 transition text-start">

            <div className="w-full h-full flex flex-col justify-center">

                <div className="text-[5vh]">
                    Hi, I'm <span className="text-(--primary)">{profile?.name.slice(0,5)}</span>
                </div>
                <div className="text-[6vh]  font-bold w-fit flex flex-wrap">
                    {profile?.title}
                </div>
                <div className="text-(--secondary) text-[3vh] font-light w-fit">
                    {profile?.bio}
                </div>
                <div className="flex justify-between items-center w-fit gap-5 mt-5">
                    <SocialMediaLinks src={"/whatsapp.png"} url={"https://wa.me/917977611642"} />
                    <SocialMediaLinks src={"/gmail.png"} url={"mailto:sahilsawant15052006@gmail.com"} />
                    <SocialMediaLinks src={"/linkedin.png"} url={"https://www.linkedin.com/in/sahilsawant1526"} />
                    <SocialMediaLinks src={"/github.png"} url={"https://github.com/Sahil-15052006"} />
                </div>

                <div className="flex flex-wrap gap-5 w-fit mt-5">
                    <Link to="contact" offset={-40} smooth={true} duration={500}>
                        <button className=" flex space-x-3 items-center justify-center border border-(--primary) rounded bg-(--dark)/40 p-2 transition duration-300 hover:bg-(--primary)">
                            <MailIcon className="h-5"/>
                            <span>Lets connect</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full h-full flex flex-col gap-5 items-center justify-center p-5">
                <div className=" rounded-full p-5 border border-(--primary)/20 w-fit">
                    <img src={profile?.profilePicURL} height={250} width={250} alt="pfp" className="rounded-full overflow-hidden" />
                </div>
                <div className="flex sm:hidden justify-center items-start">
                    <DownloadResume/>
                </div>
            </div>
        </div>
    )
}
