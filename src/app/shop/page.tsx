import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function page() {
  return (
    <div className='w-[1343px] h-[850px]  bg-[#ffffff]'>
  <div className='bg-[#272343] top-[14px] right-[300px] bottom-[14px] left-[300px] w-[1343px] h-[45px] justify-between'>
      <Image src='/check 1.png' alt='check' className='absolute translate-x-3 top-4 left-[255px] 'width={16} height={16}></Image>
  <span className='absolute top-3 left-[290px] text-white text-sm no-underline hover:underline '>Free shipping on all orders over $50
  </span>
  <nav className="flex justify-around place-items-center w-[202px] h-[17px] gap-[30px] opacity-70 left-[1030px]  top-3 absolute">
              <select name='select' id='select' className='absolute right-[190px]  text-[#ffffff] bg-[#272343] hover:text-blue-100'>
          <option value='Eng'>Eng</option>
          <option value='Urdu'>Urdu</option>
          <option value='Hindi'>Hindi</option>
          <option value='Arabic'>Arabic</option>
          <option value='Turkish'>Turkish</option>

        </select>
      
        
      
        <div className='relative w-[28px] h-[17px] font-inter font-normal text-[13px] text-center leading-[16.9px]'>
          <span className='absolute [7px] h-[3.5px]'>
            <h1 className='absolute w-[30px] h-[17px] font-inter font-normal text-[13px] text-[#ffffff] text-sm leading-[16.9px] text-center hover:text-blue-100'><Link href="./faqs">FAQs</Link></h1>
          </span>
        </div>
 
      <div className="relative w-[87px] h-[17px] gap-[6px]">
      <Image src='/alert-circle 1.png' alt='alert-cirlce' className='absolute  w-[16px] h-[16px] opacity-70' width={16} height={16}>
      </Image>
        <span className="absolute top-0 -right-5 font-inter font-normal text-[14px] text-[#ffffff] text-sm leading-[16.9px] text-center hover:text-blue-100"><Link href="./needhelp">Need Help?</Link>
          </span>
          </div>     
</nav>
  <div className='w-[1343px] h-[84px] pt-[20px] pr-[300px] pb-[20px] pl-[300px] top-[45px] absolute bg-[#F0F2F3]'></div>
  <h1 className='w-[118x]  h-[31px]  space-x-8 text-[26px] gap-[8px] text-[#272343] top-[62px] right-[320px] left-[320px] bottom-[14px] absolute font-inter '>Comforty</h1>
  <h2><Image src='/Logo Icon.png' alt='logo' className='top-12 left-56 -translate-x-1 absolute' width={40} height={40}></Image></h2>
  <div className="flex items-end justify-end -right-0 left-3/4 top-1 absolute ">
    <div className='flex justify-around items-center w-[120px] h-[44px] rounded-lg bg-[#ffffff] left-[20px] translate-x-20 top-12 absolute'>
    <Image src='/Buy.png' alt='buy' className='absolute right-[90px]' width={20} height={20}></Image>
  <h3 className="w-[26px] h-[13px] text-center text-[rgb(39,35,67)] font-medium text-[13px] absolute right-[55px] leading-[13.2px] hover:bg-[#f0f2f3] hover:text-[#272343]"><Link href="./cart">Cart</Link></h3>
  <Image src='/No.png' alt='no' className='absolute right-[20px]' width={20} height={20}></Image>
  <div className='w-[1340px] h[74px] justify-between pt-14px pr-300px pb-14px pl-300px bg-[#ffffff]'>

  
  <p className='text-[#636270] w-[57px] h-[15px] text-[14px] font-inter top-[92px] right-[120px] absolute'>Contact:</p>
    <h2 className='w-[103px] h-[15px] text-[#272343] text-[14px] font-inter -translate-y-1 -translate-x-2 top-[96px] left-[10px] absolute'>(808) 555-0111</h2>
</div>
</div>
</div>
</div>

<nav className='w-[1321px] h[74px] justify-between pt-14px pr-300px pb-14px pl-300px bg-[#ffffff]'>
         <ul className='w-[339px] h-[15px] gap-32px lg:gap-5 top-[156px] right-[730px] absolute text-[13px] flex md:flex'>
          
        <Link className='menuLink text-[#007580] hover:underline' href="/homeone">Home</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/shop">Shop</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/products">Products</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/contact">Contact Us</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/about">About</Link>
        </ul>
        <h2 className='border border-[#D9D9D9] w-[1343px] h-[0px] absolute top-[200px]'></h2>

        </nav>

      <div><Image src="/Image (8).png" alt='pic 1' width={500} height={500} className='absolute top-[300px] left-[200px] w-[500px] '></Image></div>
      <h1 className='w-[448px] h-[52px] top-[300px] left-[760px]  absolute text-[49px] font-extrabold leading-[66px] no-underlineunderline hover:underline'>Library Stool Chair</h1>
      <button className='text-[#FFFFFF] bg-[#029FAE] bg-[20px] absolute top-[450px] left-[760px] w-[120] rounded-3xl font-xs hover:bg-[#0d5a61] transition-all duration-200'>$20.00 USD</button>
      <h3 className='border border-[#d9d9d9] w-[400px] absolute top-[510px] left-[760px]'></h3>
      <h4 className='w-[543px] h-[101px] leading-[33px]  absolute top-[540px] left-[760px] text-[23px] text-[#272343]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
      <button className='text-[#FFFFFF] bg-[#029FAE] w-[170px] h-[40px] rounded-lg top-[670px] left-[760px] absolute hover:bg-[#0d5a61] transition-all duration-200'>Add To cart
      <Image src='/Buy 2 (2).png' alt='buy' className='absolute left-[8px] top-[11px] text-[#ffffff]' width={20} height={20}></Image>
</button>
      <h5 className='w-[448px] h-[52px] top-[900px] left-[200px]  absolute text-[30px] font-bold leading-[66px] no-underlineunderline hover:underline'>Featured Products</h5>
      <h6 className='h-[52px] top-[900px] left-[1200px]  absolute text-[20px] font-bold leading-[66px] underline hover:underline'>View all</h6>
<div><Image src='/Products(6).png' alt='img 1' width={200} height={200} className='absolute top-[1000px] left-[190px]'></Image></div>
<div><Image src='/Products(11).png' alt='img 2' width={200} height={200} className='absolute top-[1000px] left-[420px]'></Image></div>
<div><Image src='/Products (13).png' alt='img 4' width={200} height={200} className='absolute top-[1000px] left-[645px] rounded-md'></Image></div>
<div><Image src='/Products(7).png' alt='img 5' width={200} height={200} className='absolute top-[1000px] left-[870px] rounded-md'></Image></div>
<div><Image src='/Products (10).png' alt='img6' width={200} height={200} className='absolute top-[1000px] left-[1090px]'></Image></div>

      
    <div className='w-[1343px] h-[343px] top-[1400px] absolute  bg-[#ffffff] border border-[#9A9CAA]'></div>
      <div><Image src='/Logo (7).png' alt='logo' className='w-[158px] h-[40px] gap-[8px] top-[1450px] left-[140px] absolute' width={140} height={40}></Image></div>
      <div><Image src='/footer.png' alt='footer' className='w-[340px] h-[80px] gap-[8px] top-[1540px] left-[140px] absolute' width={380} height={40}></Image></div>
      <SiFacebook className='w-[28px] h-[28px] border-1px text-[#007580] hover:text-[#083a3f] transition-colors duration-300 top-[1660px] left-[130px] absolute'/>
      <FaTwitter className='w-[28px] h-[28px] border-1px  hover:text-[#083a3f] transition-colors duration-300 top-[1665px] left-[180px] absolute'/>
      <FaInstagram className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[1665px] left-[220px] absolute'/>
      <FaPinterest className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[1665px] left-[260px] absolute'/>
      <FaYoutube className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[1665px] left-[300px] absolute'/>

      <div className='w-[102px] h-[15px] font-inter font-[14px] leading-[15.4px] top-[1450px] left-[558px] absolute text-[#9A9CAA]'>Category</div>
        <ul><li className='w-[180px] h-[178px] font-inter font-[16px] top-[1490px] left-[558px] absolute text-[#272343] hover:text-[#007580] hover:underline border-y-2 border-x-2 rounded-2xl border-transparent hover:border-[#9A9CAA]  transition-colors duration-300'>Sofa</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[1520px] left-[558px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Armchair</li></ul>
        <ul><li className='w-[286px] h-[18px] top-[1550px] left-[558px] absolute font-inter font-[16px]  text-[#272343] hover:text-[#007580] hover:underline'>Wing Chair</li></ul>
        <ul><li className='w-[286px] h-[18px]  font-[16px] top-[1585px] left-[558px] absolute leading-[17.6px] text-[#007580] underline'>Desk Chair</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[1615px] left-[558px] absolute leading-[17.6px] text-[#272343] hover:text-[#007580] hover:underline'>Wooden Chair</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[1645px] left-[558px] absolute leading-[17.6px] text-[#272343] hover:text-[#007580] hover:underline'>Park Bench</li></ul>

      <div className='w-[102px] h-[15px] font-inter font-[14px] top-[1450px] left-[750px] absolute text-[#9A9CAA]'>Support</div>
      <div className="flex items-center justify-center h-screen">
        <ul><li className='w-[200px] h-[128px] font-inter font-[14px] top-[1490px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline border-y-2 border-x-2 rounded-2xl border-transparent hover:border-[#9A9CAA]  transition-colors duration-300'>Help & Support</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[14px] top-[1520px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Tearms & Conditions</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[14px] top-[1550px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Privacy Policy</li></ul>
        <ul><li className='w-[35px] h-[18px] font-inter font-[14px] top-[1580px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Help</li></ul>
</div>




    <div className='w-[102px] h-[60px] top-[1450px] left-[1000px] absolute text-[#9A9CAA] font-inter text-[17px] hover:underline'>NEWSLETTER</div>
    <div className='absolute top-[1500px] left-[970px]'>
    <div className="search flex items-center"> <input className="srch border border-[#E1E3E5] rounded-sm p-2 mr-2 w-[214px] h-[46px] text-[#9A9CAA]" type="search" name="" placeholder="Your email" /> <a href="#">   <button className="btn bg-[#029FAE] w-[120px] text-white p-2 rounded-lg">Subscribe</button> </a>
    <Image src='/footer2.png' alt='footer' className='absolute top-[80px] w-[540px] h-[40px]' width={640} height={40} ></Image>
    </div>
    </div>
    <div><Image src='/Frame 69.png' alt='frame' className='top-[1743px] overflow-hidden absolute w-[1543px] h-[74px] ' width={2000} height={200}></Image></div>

        </div>
  )
}

export default page