import {
  Github,
  Linkedin,
  Mail,
  MessageCircleIcon,
  LucideMessagesSquare,
} from "lucide-react";

import ShortcutLinks from "../components/ShortcutLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-(--background) text-(--light) py-20 px-5"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Let’s Build Something Together
          </h1>

          <p className="text-(--secondary) text-lg sm:text-xl ">
            Have a project idea, freelance opportunity, or just want to connect? Let's talk.
          </p>
        </div>

        {/* Main Container */}
        <div className="w-full mt-14 grid lg:grid-cols-2 gap-8">

          {/* Left Card */}
          <div className="rounded-lg border border-(--secondary)/20 bg-(--dark) p-6 sm:p-8 space-y-8 transition-all duration-300 hover:border-(--primary)/40">

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Connect With Me
              </h2>

              <p className="text-(--secondary) leading-relaxed">
                I’m always excited to discuss new ideas,
                collaborations, startups, or interesting
                development projects.
              </p>
            </div>

            <div className="space-y-4">

              <ShortcutLinks
              icon={LucideMessagesSquare}
              text={'WhatsApp Sahil'}
              url={"https://wa.me/917977611642"}
              />

              <ShortcutLinks
                icon={Mail}
                text={"sahilsawant15052006@proton.me"}
                url={"https://mail.google.com/mail/?view=cm&fs=1&to=sahilsawant15052006@proton.me"
                }
              />

              <ShortcutLinks
                icon={Linkedin}
                text={"@sahilsawant1526"}
                url={"https://linkedin.com/in/sahilsawant1526"}
              />

              <ShortcutLinks
                  icon={Github}
                  text={"Sahil-15052006"}
                  url={"https://github.com/Sahil-15052006"}
              />
            </div>

            {/* Response Time */}
            <div className="rounded-lg border border-(--primary)/30 bg-(--background) p-4">
              <div className="flex items-center gap-3">
                <MessageCircleIcon className="h-5 w-5 text-(--primary)" />

                <span className="font-semibold text-(--primary)">
                  Response Time
                </span>
              </div>

              <p className="text-sm text-(--secondary) mt-2">
                Usually within 24 hours.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-(--secondary)/20 bg-(--dark) p-6 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:border-(--primary)/40">

            <div className="space-y-5">
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                Building modern
                <span className="text-(--primary)">
                  {" "}digital experiences
                </span>
              </h2>

              <p className="text-(--secondary) leading-relaxed">
                From full-stack applications to scalable backend systems,
                I focus on creating fast, clean, and user-friendly products
                with modern technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "TypeScript",
                "Docker",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-(--background) border border-(--secondary)/20 text-sm text-(--secondary) hover:border-(--primary)/40 hover:text-(--primary) transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
