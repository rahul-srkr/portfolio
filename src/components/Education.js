import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ type, time, info, place }) => {
    const ref = useRef()
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="mt-64 sm:mt-32 lg:mt-44">
            <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16">Education</h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="Bachelor Of Commerce"
                        time="2015-2018"
                        place="Pt. Ravishankar Shukla University in Raipur, Chhattisgarh"
                        info="Graduates with a BCom degree can pursue a wide range of career paths, including roles in finance, accounting, marketing, human resources, and general management."


                    />

                    <Details
                        type="Post Graduate Diploma in Computer Application"
                        time="2018-2020"
                        place="Pt. Ravishankar Shukla University in Raipur, Chhattisgarh"
                        info="These may include roles in software development, computer networking, database administration, artificial intelligence, and other related fields."


                    />

                </ul>
            </div>
        </div>
    )
}
export default Education