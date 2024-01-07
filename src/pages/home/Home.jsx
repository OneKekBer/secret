

const Home = () => {
   const content = [
      {
         title: 'хлеб духмяный',
         src: 'https://i.pinimg.com/564x/67/bc/31/67bc31f88e943dcef0ad6d45fe1126db.jpg',
         price: 5
      },
      {
         title: 'хлеб чесночный',
         src: 'https://i.pinimg.com/564x/57/23/f6/5723f6b6069bb0a7631f57030a56896a.jpg',
         price: 5


      },
      {
         title: 'хлеб медовый',
         src: 'https://i.pinimg.com/564x/83/00/ec/8300ecfd7b540af58c8a4c586377bd73.jpg',
         price: 5


      },
      {
         title: 'хлеб медовый',
         src: 'https://i.pinimg.com/564x/55/20/1e/55201ef0a290a84591ce0f1de1486b61.jpg',
         price: 5


      },
      {
         title: 'хлеб медовый',
         src: 'https://i.pinimg.com/564x/9b/87/24/9b8724dc3f7ba8a2a9674ae633e4064c.jpg',
         price: 5


      }, {
         title: 'хлеб медовый',
         src: 'https://i.pinimg.com/564x/0e/0a/e0/0e0ae07867d61f5b8f87dfee879c8603.jpg',
         price: 5


      },
      {
         title: 'хлеб медовый',
         src: 'https://i.pinimg.com/564x/e3/de/8a/e3de8a8d3b4fe639f95612ec793d5835.jpg',
         price: 5


      }
   ]

   return (
      <div className='w-full h-full bg-blue-50'>
         <div className='w-[1000px] mx-auto'>
            {/* <div className='flex items-center justify-between py-5'>
               <div className='flex items-center gap-5'>
                  <div className='bg-red-500 w-[50px] h-[50px] rounded-[50%]'></div>
                  <div className='text-2xl font-bold'>Bread</div>
               </div>
               <div className='flex gap-10'>
                  <div className='text-2xl cursor-pointer font-bold'>Home</div>
                  <div className='text-2xl cursor-pointer font-bold'>About</div>
                  <div className='text-2xl cursor-pointer font-bold'>Contact</div>
               </div>
            </div> */}
            <div className='text-center'>
               <div className='text-5xl font-bold'>Bread</div>
               <div className='text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</div>

            </div>
            <div className='flex p-14 flex-wrap justify-center gap-5 '>
               {content.map((item, i) => {


                  return (
                     <div key={i} className='w-[250px] p-5 h-[350px] bg-white shadow-xl rounded-[10px]'>
                        <div><img src={item.src} className='h-[180px] w-full object-cover' alt="" /></div>
                        <div className='flex py-2 justify-between'>
                           <div>{item.title}</div>
                           <div>{item.price}$</div>
                        </div>
                        <div className='flex w-full py-1'>
                           <div className='px-2 cursor-pointer hover:border-gray-400 hover:text-gray-400 duration-300 rounded-l-lg text-center flex items-center justify-center border border-black '>+</div>
                           <div className='px-2 cursor-pointer hover:border-gray-400 hover:text-gray-400 duration-300  text-center flex items-center justify-center border border-black '>1</div>
                           <div className='px-2 cursor-pointer hover:border-gray-400 hover:text-gray-400 duration-300 rounded-r-lg text-center flex items-center justify-center border border-black '>-</div>
                        </div>
                        <button className='text-center w-full h-[30px] cursor-pointer hover:bg-yellow-50 duration-200 bg-yellow-100 rounded-md'>купить</button>

                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Home