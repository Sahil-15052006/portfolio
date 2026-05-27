import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeChanger from "./ThemeChanger";
import DownloadResume from "./DownloadResume";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        sticky top-4 z-50
        mx-auto flex w-[95%] max-w-7xl
        items-center justify-between
        rounded-lg border border-white/10
        bg-(--primary)/5
        px-3 sm:px-6 py-3
        backdrop-blur-xl
        shadow-lg shadow-black/10
      "
    >
      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="
          hidden sm:flex
          text-(--primary)
          font-mono font-bold
          tracking-widest
          cursor-pointer
        "
      >
        <Link to="hero" smooth={true} offset={-60}>
          {"<SAHIL />"}
        </Link>
      </motion.div>

      {/* CENTER NAV */}
      <div
        className="flex justify-center items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-2"
      >
        {navItems.map((item) => (
          <motion.div
            key={item.to}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.to}
              smooth={true}
              offset={-40}
              className=" relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-(--light) hover:bg-(--primary)/15 :text-(--primary) " >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="hidden sm:flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ThemeChanger />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         <DownloadResume />
        </motion.div>
      </div>
    </motion.nav>
  );
}
