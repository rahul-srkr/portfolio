import Link from "next/link"
import { CircularText } from "./Icons"

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
            <div className="flex items-center w-44 h-auto justify-center relative md:w-24 lg:w-40">
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link href="mailto:abcd@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px] lg:w-[4.5rem] lg:h-[4.5rem] lg:text-sm">
                    Hire Me
                </Link>
            </div>
        </div>
    )
}
export default HireMe