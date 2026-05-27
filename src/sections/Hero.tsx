import { MailIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-scroll";
import SocialMediaLinks from "../components/SocialMediaLinks";
import DownloadResume from "../components/DownloadResume";
import { usePortfolio } from "../context/PortfolioContext";

export default function Hero() {
  const { portfolioData } = usePortfolio();
  const profile = portfolioData?.profile;

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen w-full px-5 sm:px-10 lg:px-20 pt-24 pb-10 gradient-dark text-(--light)"
    >
      {/* background blur */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-(--primary)/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-(--primary)/10 blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">

          {/* small intro */}
          <div className="mb-4">
            <span className="border border-(--primary)/30 bg-(--primary)/10 text-(--primary) px-4 py-1 rounded-full text-sm tracking-wide">
              {profile?.title}
            </span>
          </div>

          {/* heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-(--primary)">
              {profile?.name?.split(" ")[0]}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-(--secondary) max-w-2xl">
            {profile?.bio}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-8">
            <SocialMediaLinks
              src={"/whatsapp.png"}
              url={"https://wa.me/917977611642"}
            />
            <SocialMediaLinks
              src={"/gmail.png"}
              url={"mailto:sahilsawant15052006@gmail.com"}
            />
            <SocialMediaLinks
              src={"/linkedin.png"}
              url={"https://www.linkedin.com/in/sahilsawant1526"}
            />
            <SocialMediaLinks
              src={"/github.png"}
              url={"https://github.com/Sahil-15052006"}
            />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

            <Link
              to="contact"
              offset={-40}
              smooth={true}
              duration={500}
            >
              <button className="group flex items-center gap-3 bg-(--primary) hover:scale-[1.03] transition-all duration-500 px-6 py-3 rounded-lg font-medium text-(--background)" >
                <MailIcon className="h-5 w-5" />
                <span>Let's Connect</span>

                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative group">


            <div className="absolute inset-0 rounded-full bg-(--primary)/20 blur-2xl scale-110 group-hover:scale-125 transition duration-500" />


            <div className="relative p-2 rounded-full bg-linear-to-br from-(--primary) to-transparent">


              <div className="rounded-full overflow-hidden border-4 border-(--dark) bg-(--dark)">
                <img
                  src={profile?.profilePicURL}
                  alt="profile"
                  className="h-65 w-65 sm:h-80 sm:w-80 object-cover rounded-full transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>


            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-(--primary)/10 border border-(--primary)/10 px-5 py-2 rounded-full text-sm font-medium shadow-xl text-center">
              Open to Opportunities
            </div>
          </div>
        </div>

        {/* mobile resume */}
        <div className="flex sm:hidden justify-center">
          <DownloadResume />
        </div>
      </div>
    </section>
  );
}
