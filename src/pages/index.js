import AnimatedText from '@/components/AnimatedText'
import Footer from '@/components/Footer'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahul | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col lg:text-center'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="CodeBucks" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full'>
              <AnimatedText text="Transforming ideas into functional web applications with JavaScript" className='!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-3xl sm:!text-2xl xs:!text-xl' />
              <p className='my-4 text-sm font-medium lg:text-lg md:text-base sm:text-lg xs:text-xs'>Hi, I&apos;m a full-stack developer with experience in developing scalable web applications using Node.js, React.js, and other related technologies.I am committed to transforming concepts into cutting-edge web applications and ensuring that the applications I build are efficient, secure, and user-friendly.Explore my latest projects, showcasing my expertise.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href="/rahul.pdf"
                  target="_blank"
                  className='flex items-center bg-dark text-light p-2 px-5 rounded-lg  font-semibold hover:bg-light hover:text-dark border-solid border-transparent border-2 hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-1 md:px-3 md:text-sm' download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1 xs:w-4"} />
                </Link>
                <Link
                  href="mailto:rahulsrkr29@gmail.com"
                  target="_blank"
                  className='ml-4 font-medium capitalize text-dark underline dark:text-light md:text-sm'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 xl:w-20 xl:bottom-0 xl:right-0 md:hidden'>
          <Image src={lightBulb} alt="codeBucks" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
