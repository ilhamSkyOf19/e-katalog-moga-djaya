import SectionThree from "./Components/Fragments/SectionThree"
import { useEffect, useRef, useState } from "react";
import thumbnail2 from "./assets/thumbnail_2.png"
import icon from "./assets/icon/md.png"
import tahuKress from "./assets/products/tahu_kress.png"
import halal from "./assets/icon/halal.png"
import basrengJebret from "./assets/products/basreng_jebret.png"
import donat from "./assets/products/donat.png"
import browniesKeringMini from "./assets/products/brownies_kering_mini.png"
import iwakKaliImutMinaDira from "./assets/products/iwak_kali_imut_mina_dira.png"
import keripikMantang from "./assets/products/keripik_mantang.png"
import kerupukIkanBantatPedas from "./assets/products/kerupuk_ikan_bantat_pedas.png"
import klantingBuUpik from "./assets/products/klanting_bu_upik.png"
import udangKressMinaDira from "./assets/products/udang_kress_mina_dira.png"
import ususCrispyPedas from "./assets/products/usus_crispy_pedas.png"
import eyekEyek from "./assets/products/eyek_eyek.png"
import CardProduct from "./Components/Fragments/CardProduct";

const categories = {
  1: {
    id: 1,
    name: "Snack",
    products: [
      { title: "Tahu Kress", desc: "Tahu renyah dan gurih", img: tahuKress, variant: "Original", price: "Rp10.000,00" },
      { title: "Basreng Jebret Original", desc: "Komposisi: Tepung, Ikan & Bumbu", img: basrengJebret, variant: "Original" },
      { title: "Kerupuk Ikan Bantat", desc: "Oleh-oleh Khas Lampung", img: kerupukIkanBantatPedas, variant: "Pedas" },
      { title: "Usus Crispy", desc: "Oleh-oleh khas Lampung Tengah", img: ususCrispyPedas, variant: "Original" },
      { title: "Eyek-Eyek", desc: "Khas Lampung", img: eyekEyek, variant: "Original" },
      { title: "Udang Kress Mina Dira", desc: "Bisa buat Camilan dan Lauk Makan", img: udangKressMinaDira, variant: "Original" },
      { title: "Iwak Kali Imut", desc: "Oleh-oleh Khas Lampung", img: iwakKaliImutMinaDira, variant: "Original" },
      { title: "Klanting Bu Upik", desc: "Oleh-oleh Khas Lampung", img: klantingBuUpik, variant: "Original" },
    ],
  },
  2: {
    id: 2,
    name: "Kue",
    products: [
      { title: "Brownies Kering Mini", desc: "Dengan Taburan Springkel, Wijen dan Meses", img: browniesKeringMini, variant: "Original" },
      { title: "Donat", desc: "Komposisi: Tepung, Bumbu & Gula", img: donat, variant: "Original" },
    ],
  },
  3: {
    id: 3,
    name: "Keripik",
    products: [
      { title: "Keripik Mantang", desc: "Komposisi: Mantang, Tepung & Garam", img: keripikMantang, variant: "Ubi Ungu" },
    ],
  },
};
function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

  const handleClickCategory = (categoryKey) => {
    setSelectedCategory(categories[categoryKey]);
  };

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  useEffect(() => {
    const enableScroll = (ref) => {
      if (!ref) return;

      let isDown = false;
      let startX;
      let scrollLeft;

      const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX - ref.offsetLeft;
        scrollLeft = ref.scrollLeft;
      };

      const handleMouseLeave = () => (isDown = false);
      const handleMouseUp = () => (isDown = false);

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.offsetLeft;
        const walk = (x - startX) * 2; // Sensitivitas geser
        ref.scrollLeft = scrollLeft - walk;
      };

      ref.addEventListener("mousedown", handleMouseDown);
      ref.addEventListener("mouseleave", handleMouseLeave);
      ref.addEventListener("mouseup", handleMouseUp);
      ref.addEventListener("mousemove", handleMouseMove);

      // Cleanup saat unmount
      return () => {
        ref.removeEventListener("mousedown", handleMouseDown);
        ref.removeEventListener("mouseleave", handleMouseLeave);
        ref.removeEventListener("mouseup", handleMouseUp);
        ref.removeEventListener("mousemove", handleMouseMove);
      };
    };

    enableScroll(scrollRef1.current);
    enableScroll(scrollRef2.current);
    enableScroll(scrollRef3.current);
  }, []);

  console.log({ scrollRef1, scrollRef2 });




  return (
    <div className="overflow-hidden font-raleway">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full h-16 z-10 fixed bg-white shadow-x px-4">
        {/* Bagian Tengah (Logo) */}
        <div className="flex justify-between items-center w-full">
          <img src={icon} alt="" className="w-14" />
          <p className="font-extrabold font-poppins text-lg"><span>Moga</span> <span className="text-[#71b66d]">Djaya</span></p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="w-full h-auto pt-16">
        <img src={`${thumbnail2}`} alt="" className="w-full object-cover" />
      </div>


      {/* Section 2 */}
      <div className="h-auto flex flex-col justify-start items-center py-14 gap-8 font-poppins">
        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-3xl">OUR PRODUCTS</div>
        </div>
        <div className="max-w-full overflow-hidden">
          <div ref={scrollRef1} className="relative flex gap-6 overflow-x-auto scrollbar-hide px-4 cursor-grab scroll-smooth py-4">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                className={`px-8 py-4 border rounded-full font-semibold text-sm shadow-md transition-all duration-300 cursor-pointer outline-none border-none
              ${selectedCategory.id === parseInt(key)
                    ? "bg-[#71b66d] text-white border-[#71b66d] shadow-lg"
                    : "border-slate-400 text-black hover:bg-[#71b66d] hover:border-[#71b66d] hover:text-white"}
            `}
                onClick={() => handleClickCategory(parseInt(key))}
              >
                {categories[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-full overflow-hidden">
          <div ref={scrollRef2} className="relative flex gap-6 overflow-x-auto scrollbar-hide px-4 py-6 cursor-grab scroll-smooth">
            {selectedCategory.products.map((product, index) => (
              <div key={index} className='rounded-4xl overflow-hidden flex justify-center items-center flex-col min-w-[14rem] max-w-[14rem] min-h-[27rem] max-h-[27rem] shadow-xl border border-slate-300 font-poppins'>
                <div className='max-w-[160%] min-w-[160%] min-h-[14rem] max-h-[13rem] bg-[#71b66d] rounded-b-[11rem] flex justify-center items-center flex-col'>
                  <div className='w-[65%] flex justify-start items-center px-8 relative before:absolute before:w-8 before:h-[2px] before:bg-white before:-bottom-1 before:rounded-full'>
                    <p className='text-sm text-white'>{product.variant}</p>
                  </div>
                  <img src={product.img} alt="" className='w-44 h-44 object-cover' />
                </div>
                <div className=' h-1/2 bg-white flex flex-col justify-start items-center py-4'>
                  <div className='w-[100%] flex flex-col justify-center items-center gap-2'>
                    <p className='w-[80%] min-h-[3.5rem] font-bold text-xl text-center'>{product.title}</p>
                    <p className='w-[80%] min-h-[3.7rem] text-sm flex justify-center items-center flex-col text-center'>{product.desc}</p>
                    <p className='text-sm font-semibold py-1 px-4 bg-[#71b66d] rounded-xl text-white'>Rp.10.000,00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* Section 3 */}
      < SectionThree halal={halal} md={icon} />
      {/* section 4 */}
      <div className="h-[85vh] py-12 px-2 font-poppins flex justify-start items-center flex-col">
        <div className="min-w-[98%] flex justify-center items-center flex-col">
          <h2 className="font-bold text-xl uppercase text-white bg-[#71b66d] py-2 px-10 rounded-full translate-y-6 tracking-wider">Visi</h2>
          <p className="text-center bg-[#F5F5F5] py-12 px-4 text-sm font-light rounded-xl">Menjadi Perusahaan yang menyediakan produk olahan dengan cita rasa khas dengan kualitas yang unggul pada cita rasa serta memiliki ciri khas  dengan pengolahan yang baik</p>
        </div>
        <div className="min-w-[98%] flex justify-center items-center flex-col">
          <h2 className="font-bold text-xl uppercase text-white bg-[#71b66d] py-2 px-10 rounded-full translate-y-6 tracking-wider">Misi</h2>
          <div className="text-center bg-[#F5F5F5] w-full py-12 px-8 text-sm font-light rounded-xl">
            <ol className="list-[lower-alpha] inline-block text-justify">
              <li>Membangun dan mengembangkan potensi diri dalam mengembangkan usaha </li>
              <li>Bisa membuat cemilan kekinian yang bergizi dan banyak di sukai </li>
              <li>Menjadikan Produk olahan Aneka snack Moga Djaya oleh-oleh khas dari Lampung </li>
              <li>Memberikan manfaat untuk lingkungan</li>
            </ol>
          </div>

        </div>
      </div>
      {/* Section 5 */}
      <div className="h-auto py-12 flex flex-col justify-start items-center gap-12 px-12">
        <h2 className="text-2xl font-extrabold py-2 px-10 rounded-full bg-[#71b66d] text-white text-center">Production Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1405.117410382533!2d105.29689264708696!3d-5.059565738322031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40bb7eb677671b%3A0xff07feb66375eca8!2sMinaDira%20BadranSariCity!5e0!3m2!1sid!2sid!4v1740283640413!5m2!1sid!2sid"
          width="330"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex justify-between items-start h-[20vh] w-[100%] bg-cover bg-center bg-no-repeat pt-6 px-4 bg-[#71b66d] rounded-t-3xl gap-6">
        <div className="w-[50%] flex-col flex justify-start items-starts">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-[0.7rem] font-poppins font-bold text-white">PT.Aneka Snack Moga Djaya</h2>
            <h2 className="text-[0.5rem] font-poppins w-full text-white">Dusun III Rt 002 Kampung Badransari Kecamatan Punggur Kabupaten Lampung Tengah Kode Pos 34152</h2>
          </div>
          <div>
            <div className="w-full h-[7rem] flex justify-start items-start pt-2 gap-2">
              <a href="https://www.facebook.com/mina.dira.54" className="py-1 px-1 transition-transform duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="13px" fill="white"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
              </a>
              <a href="https://www.facebook.com/suprihatin.bio" className="py-1 px-1 transition-transform duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="13px" fill="white"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
              </a>
              <a href="https://www.instagram.com/moga_djaya?igsh=MWxpdnY0aTVqbTJ4eg==" className="py-1 px-1 transition-transform duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="13px" fill="white"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a href="https://www.instagram.com/suprihatinbio09?igsh=MWQwcjFtMW9mMGo1MA==" className="py-1 px-1 transition-transform duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="13px" fill="white"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@moga_djaya?_t=ZS-8uEbh95L4HH&_r=1" className="py-1 px-1 transition-transform duration-300 hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="13px" fill="white"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50%] text-[0.5rem] flex flex-col justify-start items-start gap-1">
          <h1 className="text-[0.7rem] text-white font-bold">Social Media</h1>
          <a href="https://www.facebook.com/mina.dira.54" class="relative text-white inline-block transition-all duration-300 hover:text-gray-200 after:block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
            Facebook : Moga Djaya
          </a>
          <a href="https://www.facebook.com/suprihatin.bio" class="relative text-white inline-block transition-all duration-300 hover:text-gray-200 after:block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
            Facebook : Suprihatinbio
          </a>
          <a href="https://www.instagram.com/moga_djaya?igsh=MWxpdnY0aTVqbTJ4eg==" class="relative text-white inline-block transition-all duration-300 hover:text-gray-200 after:block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
            Instagram : Aneka_Snack_Moga_Djaya
          </a>
          <a href="https://www.instagram.com/suprihatinbio09?igsh=MWQwcjFtMW9mMGo1MA==" class="relative text-white inline-block transition-all duration-300 hover:text-gray-200 after:block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
            Instagram : Suprihatinbio
          </a>
          <a href="https://www.tiktok.com/@moga_djaya?_t=ZS-8uEbh95L4HH&_r=1" class="relative text-white inline-block transition-all duration-300 hover:text-gray-200 after:block after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
            Tiktok : Aneka Snack Moga Djaya
          </a>

        </div>
      </div>
      <div className="bg-[#71b66d] h-[4rem] w-full flex justify-center items-center text-white">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[0.7rem]">&copy; 2025</h2>
          <p className="text-[0.6rem]">KKN ILKOM</p>
          <p className="text-[0.6rem]">Universitas Muhammadiyah Metro</p>
        </div>
      </div>
    </div >
  )
}

export default App