import { motion } from "framer-motion"

const TransitionEffect = () => {

    return (
        <>
            <motion.div className="fixed top-0 botton-0 right-full w-screen h-screen z-30 bg-primary" initial={{ x: "100%", width: "100%" }} animate={{ x: "0%", width: "0%" }} exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }} transition={{ duration: 0.8, ease: "easeOut" }} />
            <motion.div className="fixed top-0 botton-0 right-full w-screen h-screen bg-light z-20" initial={{ x: "100%", width: "100%" }} animate={{ x: "0%", width: "0%" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} />
            <motion.div className="fixed top-0 botton-0 right-full w-screen h-screen z-10 bg-dark" initial={{ x: "100%", width: "100%" }} animate={{ x: "0%", width: "0%" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} />
        </>
    )
}
export default TransitionEffect