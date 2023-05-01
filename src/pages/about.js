import AnimatedText from "@/components/AnimatedText"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Layout from "@/components/Layout"
import Skills from "@/components/Skills"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef } from "react"
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import TransitionEffect from "@/components/TransitionEffect"
import Certification from "@/components/Certification"

const Animatenumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInview = useInView(ref, { once: true })

    useEffect(() => {
        if (isInview) {
            motionValue.set(value)
        }
    }, [isInview, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            console.log(latest);
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>Rahul | About</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Bringing your vision to life with passion and expertise." className="mb-16 lg:!text-5xl md:!text-4xl sm:!text-4xl xs:!text-xl sm:mb-8" />
                    <div className="w-full">
                        <div className="flex-col flex items-center justify-center leading-8 xs:text-xs sm:text-center">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Hello, I&apos;m Rahul Sarkar, a full-stack developer. I have a passion for building innovative web applications. I graduated from Pt. Ravishankar Shukla University with a Post Graduate Diploma in Computer Application, where I took courses in web development, fundamentals of computer, database management, internet and web technology, web design. During my time at university, I developed a keen interest in full-stack development and decided to pursue it as a career.
                            </p>
                            <p className="font-medium my-4">
                                I have experience working with HTML, CSS, JavaScript, React, Node.js, MongaDB, SQL, and Git, and I'm always looking to expand my skill set. I have completed certifications in javaScript,React and Node.js development from Udemy and have worked on a number of projects, including a admin dashboard, income and expenses tracker and real-estate property finder.
                            </p>
                            <p className="font-medium">
                                When I&apos;m not coding, you can find me exploring new hiking trails or trying out new recipes in my kitchen. I&apos;m a firm believer in work-life balance and strive to maintain a healthy lifestyle.
                            </p>
                        </div>

                        {/* <div className="flex items-center justify-between mt-32">
                            <div className="flex flex-col justify-center items-center">
                                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                                    <Animatenumbers value={5} />+
                                </span>
                                <h2 className="text-xl mt-6 font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                                    <Animatenumbers value={7} />+
                                </span>
                                <h2 className="text-xl mt-6 font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                                    <Animatenumbers value={2} />+
                                </span>
                                <h2 className="text-xl mt-6 font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
                            </div>
                        </div> */}
                    </div>
                    <Skills />
                    {/* <Experience /> */}
                    <Education />
                    <Certification />
                </Layout>

            </main>
        </>
    )
}
export default About