import React from 'react'

const SectionThree = ({ halal, md }) => {
    return (
        <div className="min-h-[185vh] w-full bg-gradient-to-b from-[#F5E1C8] via-white to-[#F5E1C8] flex flex-col justify-start items-center pt-12 font-poppins">
            <div className="flex justify-center items-center flex-col mb-12 gap-4">
                <h1 className="font-bold text-4xl tracking-wider uppercase">licensing</h1>
                <p className="font-serif text-sm italic">the permits we have</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="h-full flex justify-between items-center gap-24">
                    {/* element NIB */}
                    <div className="min-h-[50%] flex flex-col justify-start items-center py-4 gap-4">
                        <div className="bg-[#71b66d] w-[4rem] h-[4rem] rounded-full flex flex-col justify-center items-center mb-4">
                            <h2 className='font-semibold font-poppins tracking-wide text-white'>NIB</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className="font-semibold font-poppins tracking-wide">Nomor Induk</p>
                            <p className="font-semibold font-poppins tracking-wide">Berusaha</p>
                        </div>
                    </div>
                    {/* element P_IRT */}
                    <div className="min-h-[50%] flex flex-col justify-start items-center py-4 gap-4">
                        <div className="bg-[#71b66d] w-[4rem] h-[4rem] rounded-full flex flex-col justify-center items-center mb-4">
                            <h2 className='font-semibold font-poppins tracking-wide text-white'>P-IRT</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className="font-semibold font-poppins tracking-wide">P-IRT</p>
                            <p className="font-semibold font-poppins tracking-wide">&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div className="h-full flex justify-between items-center gap-24">
                    {/* element BPPOM */}
                    <div className="min-h-[50%] flex flex-col justify-start items-center py-4 gap-4">
                        <div className="bg-[#71b66d] w-[4rem] h-[4rem] rounded-full flex flex-col justify-center items-center mb-4">
                            <h2 className='font-semibold font-poppins tracking-wide text-white'>BPOM</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className="font-semibold font-poppins tracking-wide">BPPOM</p>
                            <p className="font-semibold font-poppins tracking-wide">On Proses</p>
                        </div>
                    </div>
                </div>
                <div className="h-full flex justify-between items-center pb-20 gap-24">
                    {/* element NPWP */}
                    <div className="min-h-[50%] flex flex-col justify-start items-center py-4 gap-4">
                        <div className="min-h-[50%] flex flex-col justify-start items-center py-4 gap-4">
                            <div className="bg-[#71b66d] w-[4rem] h-[4rem] rounded-full flex flex-col justify-center items-center mb-4">
                                <h2 className='font-semibold font-poppins tracking-wide text-white'>NPWP</h2>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className="font-semibold font-poppins tracking-wide">NPWP</p>
                                <p className="font-semibold font-poppins tracking-wide">Badan Usaha</p>
                            </div>
                        </div>
                    </div>
                    {/* element halal */}
                    <div className="min-h-[50%] flex flex-col justify-start items-center py-4 gap-4">
                        <div className="bg-[#71b66d] rounded-full px-5 py-5 flex flex-col justify-center items-center mb-4">
                            <img src={halal} alt="" className="w-[1.8rem] object-contain" />
                        </div>
                        <div>
                            <p className="font-semibold font-poppins tracking-wide">Halal</p>
                            <p className="font-semibold font-poppins tracking-wide">&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] h-full flex flex-col justify-start items-center text-center font-poppins gap-16 pt-16 text-white bg-gradient-to-b from-[#71b66d] to-transparent">
                    <div className="w-full h-[30%] px-4">
                        <h1 className="text-2xl font-bold tracking-wide uppercase font-raleway mb-4">Our Story</h1>
                        <p className="text-[0.8rem] leading-6 text-black opacity-80 mb-2">Aneka Snack Moga Jaya berdiri sejak tahun 2016, dulu bernama Mina Dira dan sejak tahun 2022 sudah menjadi PT Aneka Snack Moga Jaya (kategori PT perorangan).
                        </p>
                    </div>
                    <div className="w-full flex justify-center items-center relative bg-red-500">
                        <img src={md} alt="" className="min-w-[90%] absolute -bottom-[14rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
