import React from 'react'

const CardProduct = () => {
    return (
        <div className="relative border border-gray-200 flex justify-between items-center flex-col max-w-[13rem] min-w-[13rem] min-h-[23rem] py-5 before:absolute before:top-0 before:left-0 before:w-[200%] before:h-[12rem] before:bg-[#71b66d] before:-z-10 before:-rotate-[20deg] before:-translate-16 overflow-hidden rounded-xl">
            <div className="flex justify-center items-start w-full flex-col  px-4">
                <h2 className="font-extrabold text-xl text-white italic">Tahu Kress</h2>
                <p className="text-[0.6rem] text-white">Lorem ipsum dolor sit amet, consectetur Lorem, ipsum.</p>
            </div>
            <div className="w-[9.5rem] h-[4.5rem] rounded-full relative before:absolute before:w-[9.5rem] before:h-[9.5rem] before:bg-[#fff1d0] before:-z-10 before:rounded-full before:translate-x-2 before:-translate-y-1 flex justify-center items-center">
                <div className="group min-w-[9.5rem] h-[9.5rem] rounded-full flex justify-center items-center bg-white transition-colors duration-300 group-hover:bg-gray-200 cursor-pointer">
                    <img src="./products/tahu_kress.png" alt="" className="w-[3rem] object-contain transition-transform duration-300 group-hover:scale-130 group-hover:rotate-6" />
                </div>
            </div>
            <div className="w-full flex justify-center items-end flex-col px-6 h-[10%] z-10">
                <div className="text-[0.7rem] tracking-wider text-white px-6 py-2 bg-[#71b66d] rounded-full hover:bg-white hover:text-[#71b66d] cursor-pointer hover:border hover:border-[#71b66d] box-border">Category</div>
            </div>
        </div>
    )
}

export default CardProduct
