import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons"
import Logo from "./Logo"

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button className={`${className} group text-light dark:text-dark my-2 relative`} onClick={handleClick}>
            {title}
            <span
                className={`h-[1px] inline-block ease-out bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark `}
            >&nbsp;</span>
        </button>
    )
}

const NavBar = ({ isOpen, setIsOpen }) => {

    const [mode, setMode] = useThemeSwitcher()

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const socialLinks = {
        twitter: "https://twitter.com/rahulsrkr29",
        linkdin: "https://www.linkedin.com/in/rahul-sarkar-34a236274/",
        pinterest: "https://pin.it/1hNolAb",
        github: "https://github.com/rahul-srkr",
        dribble: "https://dribbble.com/rahulsrkr29"
    }
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-6"
        >

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>

            <div className="w-full justify-between flex items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4 relative" toggle={handleClick} />
                    <CustomLink href="/about" title="About" className="mx-4 relative" toggle={handleClick} />
                    <CustomLink href="/projects" title="Projects" className="mx-4 relative" toggle={handleClick} />
                    {/* <CustomLink href="/articles" title="Articles" className="ml-4 relative" toggle={handleClick} /> */}
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href={socialLinks.twitter}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mx-3"
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        href={socialLinks.github}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mx-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href={socialLinks.linkdin}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href={socialLinks.pinterest}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mx-3 bg-light rounded-full"
                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a
                        href={socialLinks.dribble}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 ml-3"
                    >
                        <DribbbleIcon />
                    </motion.a>

                    <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                        {
                            mode === "dark" ?
                                <SunIcon className="fill-dark" /> :
                                <MoonIcon className="fill-dark" />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="z-30 w-[70vw] flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between flex items-center bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32">
                        <nav className="flex flex-col items-center justify-center">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                            {/* <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} /> */}
                        </nav>

                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a
                                href={socialLinks.twitter}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-5 mx-3 sm:mx-1"
                            >
                                <TwitterIcon />
                            </motion.a>
                            <motion.a
                                href={socialLinks.github}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-5 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a
                                href={socialLinks.linkdin}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-5 mx-3 sm:mx-1"
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a
                                href={socialLinks.pinterest}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-5 mx-3 bg-light rounded-full sm:mx-1"
                            >
                                <PinterestIcon />
                            </motion.a>
                            <motion.a
                                href={socialLinks.dribble}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-5 ml-3 sm:mx-1"
                            >
                                <DribbbleIcon />
                            </motion.a>

                            <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} onClick={(e) => {
                                e.preventDefault()
                                setMode(mode === "light" ? "dark" : "light")
                            }}>
                                {
                                    mode === "dark" ?
                                        <SunIcon className="fill-dark" /> :
                                        <MoonIcon className="fill-dark" />
                                }
                            </button>
                        </nav>
                    </motion.div> :
                    null
            }


            <div
                className="absolute left-[50%] top-2 translate-x-[-50%]"
            >
                <Logo />
            </div>
        </header>
    )
}
export default NavBar