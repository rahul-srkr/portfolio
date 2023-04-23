import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import adminDashboard from "../../public/images/projects/admin_dashboard_img.png"
import fiverUi from "../../public/images/projects/fiver_ui_clone_img.png"
import incomeExpenditureTracker from "../../public/images/projects/income_and_expenditure_tracker_img.png"
import kanbanBoard from "../../public/images/projects/kanban_board_img.png"
import realState from "../../public/images/projects/real_state_img.png"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImage = motion(Image)

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full items-center justify-center flex flex-col rounded-2xl border border-soid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem] rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-xl">{title}</h2>
                </Link>
                <div className="mt-2 flex items-center justify-between w-full">
                    <Link href={link} target="_blank" className=" font-semibold text-lg underline md:text-base">Visit</Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const FeaturedProject = ({ title, type, summary, img, link = "", github = "" }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-10 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2.5rem] rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"/>
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold text-lg dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    const projectLinks = {
        adminDashboard: "https://responsive-admin-dashboard-azure.vercel.app/",
        fiverUi: "https://fiver-clone-gamma.vercel.app/",
        incomeExpenditureTracker: "https://income-and-expenditure-tracker.vercel.app/",
        kanbanBoard: "https://kanban-board-woad.vercel.app/",
        realState: "https://realstate-snowy.vercel.app/"
    }

    const gitHubLinks = {
        adminDashboard: "https://github.com/rahul-srkr/Responsive-Admin-Dashboard",
        fiverUi: "https://github.com/rahul-srkr/fiver-clone",
        incomeExpenditureTracker: "https://github.com/rahul-srkr/income-and-expenditure-tracker",
        kanbanBoard: "https://github.com/rahul-srkr/kanban-board",
        realState: "https://github.com/rahul-srkr/realstate"
    }

    const projectsTitle = {
        adminDashboard: "Responsive Admin Dashboard",
        fiverUi: "Fiver UI Clone",
        incomeExpenditureTracker: "Income & Expenditure Tracker",
        kanbanBoard: "Kanban Board",
        realState: "Real State App"
    }

    const featuredProjectsDescription = {
        adminDashboard: "An admin dashboard is a web-based tool that allows administrators to monitor and manage various aspects of their organization's operations and data through a centralized and customizable interface. It typically displays key performance indicators (KPIs) in an easily understandable manner, provides access to detailed reports and analytics tools, data filtering and sorting."
    }
    return (
        <>
            <Head>
                <title>CodeBucks | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex items-center justify-center flex-col dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Innovative solutions for your digital needs!" className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-2xl" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title={projectsTitle.adminDashboard}
                                summary={featuredProjectsDescription.adminDashboard}
                                type="Featured Project"
                                img={adminDashboard}
                                link={projectLinks.adminDashboard}
                                github={gitHubLinks.adminDashboard}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title={projectsTitle.fiverUi}
                                type="Project"
                                img={fiverUi}
                                link={projectLinks.fiverUi}
                                github={gitHubLinks.fiverUi}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title={projectsTitle.incomeExpenditureTracker}
                                type="Project"
                                img={incomeExpenditureTracker}
                                link={projectLinks.incomeExpenditureTracker}
                                github={gitHubLinks.incomeExpenditureTracker}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title={projectsTitle.realState}
                                type="Project"
                                img={realState}
                                link={projectLinks.realState}
                                github={gitHubLinks.realState}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title={projectsTitle.kanbanBoard}
                                type="Project"
                                img={kanbanBoard}
                                link={projectLinks.kanbanBoard}
                                github={gitHubLinks.kanbanBoard}
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}
export default Projects