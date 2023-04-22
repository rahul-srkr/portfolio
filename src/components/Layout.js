const Layout = ({ children, className = "" }) => {
    return (
        <div className={`w-ful h-full inline-block z-0 bg-light p-32 xl:p-20 lg:p-8 md:p-12 sm:p-5 dark:bg-dark ${className}`}>
            {children}
        </div>
    )
}
export default Layout