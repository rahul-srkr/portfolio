import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ name, mentor, platform, description }) => {
    const ref = useRef()
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{name}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {mentor} | {platform}
                </span>
                <p className="font-medium w-full md:text-sm">{description}</p>
            </motion.div>
        </li>
    )
}

const Certification = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="mt-64 sm:mt-32 lg:mt-44 mb-16">
            <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16">Certifications</h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        name="The Complete JavaScript"
                        platform="Udemy"
                        mentor="Jonas Schmedtmann"
                        description="This is the most complete and in-depth JavaScript course on Udemy. It's an all-in-one package that will take from the very fundamentals of JavaScript, all the way to building modern and complex applications."
                    />

                    <Details
                        name="The Complete Web Development"
                        platform="Udemy"
                        mentor="Dr.Angela Yu"
                        description="The course includes over 65 hours of HD video tutorials and teach uou everything you need to know to succeed as web developer"
                    />
                    <Details
                        name="The Complete Python Pro Bootcamp"
                        platform="Udemy"
                        mentor="Dr.Angela Yu"
                        description="This course doesn't cut any cornes, there are beautiful animated explanation videos and tens of real-world projects e.g. Tinder Auto Swiper,  Snake Game, Blog Websites, Linkdin Auto Submit Job Appliction."
                    />
                    <Details
                        name="UX & Web Design  Master"
                        platform="Udemy"
                        mentor="Joe Natoli"
                        description="This course will help you stand out as a web designer, teaching how to apply User Experience (UX) strategies that will make every site build useful, usable, and valuable."
                    />
                </ul>
            </div>
        </div>
    )
}
export default Certification