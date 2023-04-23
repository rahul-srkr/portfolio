import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ title, description }) => {
    const ref = useRef()
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{title}</h3>
                <p className="font-medium w-full md:text-sm">{description}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="mt-64 sm:mt-32 lg:mt-44">
            <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16">Work Experience</h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        title="Job Portal Web Application"
                        description="A platform that connects job seekers and employers. It typically provides job listings and other related services to facilitate the process of finding and applying for jobs."

                    />
                    <Details
                        title="Web Application For Influencers Market-Place"
                        description="It allows brands to easily find and collaborate with influencers who have a significant following on social media platforms like Instagram, YouTube, and others."

                    />
                    <Details
                        title="Ecommerce Web Application For (kitchenwares)"
                        description="A kitchenware e-commerce web application is a platform that allows users to purchase kitchen products and supplies online. The website typically provides a wide range of products, from basic kitchen utensils to high-end appliances."

                    />
                    <Details
                        title="Food Ordering Web Application"
                        description="Its provides a convenient and efficient way for users to order food online and have it delivered to their doorstep. It allows users to easily browse and compare menu options from various restaurants, and provides a secure and streamlined ordering and payment process."
                    />
                    <Details
                        title="Web Application for Hotel Management"
                        description="A integrated platform for hotel managers and staff to manage all aspects of their hotel operations, from guest reservations and check-ins to inventory and financial management. It improves efficiency, reduces errors, and provides a better guest experience."
                    />
                    <Details
                        title="Portfolio Web Templates"
                        description="A powerful tool for individuals and businesses to showcase their skills and accomplishments online. It allows users to create a professional online presence and share their work with a wider audience, which can lead to new opportunities and connections in their field."
                    />
                </ul>
            </div>
        </div>
    )
}
export default Experience