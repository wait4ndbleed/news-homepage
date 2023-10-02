"use client"

import { useState } from "react"

export default function Home() {
  const [ menu, setMenu ] = useState<boolean>(false);

  const handleToggle = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <>
      <header className='my-10 container max-w-6xl m-auto'>
        <div className="mx-4 flex justify-between">
          <div>
            <img src="./assets/images/logo.svg" alt="Logo" />
          </div>
          <div className={`${menu && 'bg-black/40 fixed'} ${!menu && 'mt-[-30px]'} md:mt-2 right-0 top-0 left-0 bottom-0 flex justify-end md:items-center`}>
            <div className={`${menu && 'h-screen bg-white w-[60%]'} flex flex-col items-end`}>
              <button className={`mt-10 mr-2 md:hidden ${menu && 'mr-7'}`} onClick={handleToggle}>
                {menu && <img src="./assets/images/icon-menu-close.svg" alt="" />}
                {!menu && <img src="./assets/images/icon-menu.svg" alt="" />}
              </button>
              <ul className={`${!menu && 'hidden'} md:flex gap-7 pl-4 w-full`}>
                <li className="mb-3"><a href="#" className="hover:text-[#e9ab53]">Home</a></li>
                <li className="mb-3"><a href="#" className="hover:text-[#e9ab53]">New</a></li>
                <li className="mb-3"><a href="#" className="hover:text-[#e9ab53]">Popular</a></li>
                <li className="mb-3"><a href="#" className="hover:text-[#e9ab53]">Trending</a></li>
                <li className="mb-3"><a href="#" className="hover:text-[#e9ab53]">Categories</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-4">
        <div className="grid grid-cols-1 md:grid-cols-3 container max-w-6xl m-auto gap-8 mb-12">
          <section className="md:col-span-2">
            <div>
              <img src="./assets/images/image-web-3-desktop.jpg" alt="" />
            </div>
            <div className="flex flex-col md:flex-row mt-6">
              <div className="text-5xl mb-5 md:mb-0 font-extrabold">
                The Bright Future of Web 3.0?
              </div>
              <div>
                <p className="mb-8">
                  We dive the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <button className="font-bold text-white hover:bg-[#00001a] text-sm tracking-[5px] px-8 py-4 mb-10 md:mb-0 bg-[#f15e50]">
                  READ MORE
                </button>
              </div>
            </div>
          </section>
          <section className="bg-[#00001a] text-white p-6">
            <h2 className="text-4xl font-bold mb-7 text-[#e9ab53]">New</h2>
            <div className="border-b border-[#c5c6ce]/40">
              <a href="#" className="font-bold hover:text-[#e9ab53]">Hydrogen VS electric Cars</a>
              <p className="text-sm mb-7 mt-3 text-[#c5c6ce]">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="border-b border-[#c5c6ce]/40 mt-5">
              <a href="#" className="font-bold hover:text-[#e9ab53]">The Downsides of AI Artistry</a>
              <p className="text-sm mb-7 nt-3 text-[#c5c6ce] font-light">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className="mt-5">
              <a href="#" className="font-bold mb-3 hover:text-[#e9ab53]">Is VC Funding Drying Up?</a>
              <p className="text-sm mt-3 text-[#c5c6ce]">Private funding by VC Firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </section>
          <section className="md:col-span-3 gap-5 grid grid-cols-1 md:grid-cols-3 mt-4">
            <div className="flex gap-5">
              <div className="w-[120px]">
                <img src="./assets/images/image-retro-pcs.jpg" className="w-[120px]" alt="" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#c5c6ce] text-4xl font-bold">01</h2>
                <a href="#" className="text-lg font-extrabold my-3 block hover:text-[#f15e50]">Reviving Retro PCs</a>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[120px]">
                <img src="./assets/images/image-top-laptops.jpg" className="w-[120px]" alt="" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#c5c6ce] text-4xl font-bold">02</h2>
                <a href="#" className="text-lg font-extrabold my-3 block hover:text-[#f15e50]">Top 10 Laptops of 2022</a>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[120px]">
                <img src="./assets/images/image-gaming-growth.jpg" className="w-[120px]" alt="" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#c5c6ce] text-4xl font-bold">03</h2>
                <a href="#" className="text-lg font-extrabold my-3 block hover:text-[#f15e50]">The Growth of Gaming</a>
                <p>How the pandemic has sparked fresh opprtunities.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
