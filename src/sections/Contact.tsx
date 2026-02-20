import { Github, Linkedin, Mail, MessageCircleIcon } from "lucide-react";
import ContactForm from "../components/ContactForm";
import ShortcutLinks from "../components/ShortcutLinks";

export default function Contact() {
  return (
    <div id="contact" className="bg-(--background) text-(--light) flex flex-col justify-center items-center py-10 transition-all">
        <div className="text-2xl sm:text-4xl  w-full font-bold text-center p-5 ">Let's Build Something Togather</div>
        <div className="text-(--secondary) sm:text-(--secondary) text-md sm:text-xl font-light text-center px-5">Have a project in mind? Let's talk</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-5">

            <ContactForm/>

            <div className="flex flex-col p-5 space-y-5 ">
                <h1 className="text-xl sm:text-2xl font-bold">Connect With Me</h1>
                <p className="text-(--secondary) text-sm">I'm always excited to discuss new projects, creative ideas, or opportunities. Let's connect!</p>

                <div className="grid grid-cols-1 gap-5">
                    <ShortcutLinks icon={Github} text={"Sahil-15052006"} url={"https://www.github.com/Sahil-15052006"}/>
                    <ShortcutLinks icon={Linkedin} text={"@sahilsawant1526"} url={"https://www.linkedin.com/in/sahilsawant1526/"}/>
                    <ShortcutLinks icon={Mail} text={"sahilsawant15052006@gmail.com"} url={"https://mail.google.com/mail/?view=cm&fs=1&to=sahilsawant15052006@gmail.com "}/>
                    
                </div>
                <div className="text-sm w-full text-(--primary) space-y-2 border border-(--primary) bg-(--primary)/20 rounded-2xl p-3">
                    <div className="flex space-x-2 justify-start items-center">
                    <MessageCircleIcon className="text-(--primary) h-5 w-5 "/>
                    <span className="font-bold">Response Time</span>
                    </div>
                    <div>
                        Usually within 24 hours 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
