import logo from '../assets/bookbound-logo.png'

export default function Home() {
    return (
        <>
            <div className='h-screen bg-bookshelf bg-cover'>
                <div className='h-full w-full backdrop-grayscale bg-secondary/15 relative flex justify-center items-center'>
                    <h1 className='text-center text-4xl absolute start-auto top-1/2 font-display'>Hello</h1>
                </div>
            </div>
            <div id="section2" className = "grid grid-cols-4 h-1/6 m-3">
                <img src={logo} className="grid-span-1 h-full w-full bg-secondary rounded-full border-secondary border-2" />
                <h2 className="col-start-auto col-span-3 ml-3 text-xl bg-background">We are a nonprofit organization dedicated to increasing access to books for underpriveliged communities across our home state of NJ and the world</h2>
            </div>
        </>
    )
}