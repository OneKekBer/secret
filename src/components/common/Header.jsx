import React from 'react'


const Header = () => {
   return (
      <header className="bg-blue-50 text-center pt-4 pb-14">
         <h1 className="text-2xl font-bold">Chleb Bakery</h1>
         <nav className="mt-4 ">
            <ul className="flex justify-center gap-5">
               <li><a href="/" className="text-blue-500 font-bold   hover:text-blue-700">Home</a></li>
               <li><a href="/menu" className="text-blue-500 font-bold   hover:text-blue-700">Menu</a></li>
               <li><a href="/about" className="text-blue-500 font-bold   hover:text-blue-700">About</a></li>
               <li><a href="/contact" className="text-blue-500 font-bold   hover:text-blue-700">Contact</a></li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
