import Link from 'next/link'

const NavBarHome = (bgColor) => {
    return (
      <>
      <div className="justify-center items-center sticky top-0 h-20 w-full bg-faint-grey ">
        <div className="flex h-full">
          <Link href="/" className="flex w-25% h-full px-10 font-Hardigan font-bold text-green-blueish-dark  hover:text-green-dark items-center justify-items-start ">Home</Link>
          <div className="flex w-50% h-full text-green-blueish-dark font-Hardigan text-2xl font-extrabold items-center justify-center"></div>
          <div className="flex relative h-full justify-center items-center">            
            <div className=" items-center text-base leading-5 hidden md:flex">
              <Link className="px-2 font-Hardigan font-bold text-green-blueish-dark  hover:text-green-dark" href="/threejspage">Blog</Link>
              <Link className="px-2 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark" href="/about">About</Link>
              <Link className="px-2 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default NavBarHome;