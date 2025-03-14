import React from 'react'
import basrengJebret from "../../assets/products/basreng_jebret.png"

const CardProduct = () => {
    return (
        <div className='rounded-4xl overflow-hidden flex justify-center items-center flex-col min-w-[14rem] max-w-[14rem] min-h-[25rem] max-h-[25rem] shadow-xl border border-slate-300 font-poppins'>
            <div className='max-w-[160%] min-w-[160%] min-h-[14rem] max-h-[13rem] bg-[#71b66d] rounded-b-[11rem] flex justify-center items-center flex-col'>
                <div className='w-[65%] flex justify-start items-center px-6 relative before:absolute before:w-6 before:h-[2px] before:bg-white before:bottom-0 before:rounded-full'>
                    <p className='text-sm text-white'>Snack</p>
                </div>
                <img src={basrengJebret} alt="" className='w-44 h-44 object-cover' />
            </div>
            <div className=' h-1/2 bg-white flex flex-col justify-start items-center py-4'>
                <div className='w-[100%] flex flex-col justify-center items-center gap-2'>
                    <p className='font-bold text-xl text-center'>Basreng Jebret</p>
                    <p className='w-[80%] text-sm flex justify-center items-center flex-col text-center'><span>Komposisi:</span> <span>Tepung, Ikan & Bumbu</span></p>
                    <p className='text-sm font-semibold py-1 px-4 bg-[#71b66d] rounded-xl text-white'>Rp.10.000,00</p>
                </div>

            </div>
        </div>
    )
}

export default CardProduct
