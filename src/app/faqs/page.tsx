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
    <div className='w-[1321px] h-[850px]  bg-[#ffffff]'>
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

<h4 className='border border-[#D9D9D9] w-[1343px] absolute top-[200px]'></h4>


<nav className='w-[1321px] h[74px] justify-between pt-14px pr-300px pb-14px pl-300px bg-[#ffffff]'>
         <ul className='w-[339px] h-[15px] gap-32px lg:gap-5 top-[156px] right-[730px] absolute text-[13px] flex md:flex'>
          
        <Link className='menuLink text-[#007580] hover:underline' href="/homeone">Home</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/shop">Shop</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/products">Products</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/contact">Contact Us</Link>
        <Link className='menuLink hover:text-[#007580] hover:underline' href="/about">About</Link>
        </ul>
        </nav>


<div className='absolute top-[250px] left-[500px]'>
  <h1 className='w-[375px] h-[54px] font-bold text-[36px] leading-[54px] no-underline hover:underline'>Questions Looks Here</h1>
  <h2 className='w-[800px] h-[48px] font-Poppins text-[16px] absolute left-[-150px] top-[60px] leading-[24px] text-[#9F9F9F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h2>
</div>
<div className='w-[580px] h-[150px] top-[400px] left-[130px] absolute  border bg-[#f0f2f3]'>
  <h1 className='w-[303px] h-[26px] font-bold text-[18px] leading-[26px] absolute top-[10px] left-[10px] text-[#333333]'>What types of chairs do you offer?</h1>
  <h2 className='w-[560px] h-[72px] font-inter text-[16px] leading-[24px] absolute left-[10px] top-[50px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h2>
  <h3 className='font-thin text-[35px] absolute top-[-10px] left-[545px]'>+</h3>
</div>
<div className='w-[580px] h-[150px] top-[580px] left-[130px] absolute  border bg-[#f0f2f3]'>
<h1 className='w-[400px] h-[26px] font-bold text-[18px] leading-[26px] absolute top-[10px] left-[10px] text-[#333333]'>Do your chairs come with a warranty?</h1>
<h2 className='w-[560px] h-[72px] font-inter text-[16px] leading-[24px] absolute left-[10px] top-[50px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h2>
<h3 className='font-thin text-[35px] absolute top-[-10px] left-[545px]'>+</h3>
  </div>

  <div className='w-[580px] h-[150px] top-[760px] left-[130px] absolute  border bg-[#f0f2f3]'>
    <h1 className='w-[303px] h-[26px] font-bold text-[18px] leading-[26px] absolute top-[10px] left-[10px] text-[#333333]'>Can I try a chair before purchasing?</h1>
    <h2 className='w-[560px] h-[72px] font-inter text-[16px] leading-[24px] absolute left-[10px] top-[50px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h2>
    <h3 className='font-thin text-[35px] absolute top-[-10px] left-[545px]'>+</h3>
</div>

<div className='w-[580px] h-[150px] top-[400px] left-[730px] absolute  border bg-[#f0f2f3]'>
  <h1 className='w-[303px] h-[26px] font-bold text-[18px] leading-[26px] absolute top-[10px] left-[10px] text-[#333333]'>How can we get in touch with you?</h1>
  <h2 className='w-[560px] h-[72px] font-inter text-[16px] leading-[24px] absolute left-[10px] top-[50px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h2>
  <h3 className='font-thin text-[35px] absolute top-[-10px] left-[545px]'>+</h3>
</div>

<div className='w-[580px] h-[150px] top-[580px] left-[730px] absolute  border bg-[#f0f2f3]'>
  <h1 className='w-[303px] h-[26px] font-bold text-[18px] leading-[26px] absolute top-[10px] left-[10px] text-[#333333]'>What will be delivered? And When?</h1>
  <h2 className='w-[560px] h-[72px] font-inter text-[16px] leading-[24px] absolute left-[10px] top-[50px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h2>
  <h3 className='font-thin text-[35px] absolute top-[-10px] left-[545px]'>+</h3>
</div>

<div className='w-[580px] h-[150px] top-[760px] left-[730px] absolute  border bg-[#f0f2f3]'>
<h1 className='w-[500px] h-[26px] font-bold text-[18px] leading-[26px] absolute top-[10px] left-[10px] text-[#333333]'>How do I clean and maintain my Comforty chair?</h1>
<h2 className='w-[560px] h-[72px] font-inter text-[16px] leading-[24px] absolute left-[10px] top-[50px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h2>
<h3 className='font-thin text-[35px] absolute top-[-10px] left-[545px]'>+</h3>
</div>

 <div className='w-[1343px] h-[343px] top-[1000px] absolute  bg-[#ffffff] border border-[#9A9CAA]'></div>
      <div><Image src='/Logo (7).png' alt='logo' className='w-[158px] h-[40px] gap-[8px] top-[1040px] left-[140px] absolute' width={140} height={40}></Image></div>
      <div><Image src='/footer.png' alt='footer' className='w-[340px] h-[80px] gap-[8px] top-[1120px] left-[140px] absolute' width={380} height={40}></Image></div>
      <SiFacebook className='w-[28px] h-[28px] border-1px text-[#007580] hover:text-[#083a3f] transition-colors duration-300 top-[1230px] left-[130px] absolute'/>
      <FaTwitter className='w-[28px] h-[28px] border-1px  hover:text-[#083a3f] transition-colors duration-300 top-[1235px] left-[180px] absolute'/>
      <FaInstagram className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[1235px] left-[220px] absolute'/>
      <FaPinterest className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[1235px] left-[260px] absolute'/>
      <FaYoutube className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[1235px] left-[300px] absolute'/>

      <div className='w-[102px] h-[15px] font-inter font-[14px] leading-[15.4px] top-[1055px] left-[558px] absolute text-[#9A9CAA]'>Category</div>
        <ul><li className='w-[180px] h-[178px] font-inter font-[16px] top-[1090px] left-[558px] absolute text-[#272343] hover:text-[#007580] hover:underline border-y-2 border-x-2 rounded-2xl border-transparent hover:border-[#9A9CAA]  transition-colors duration-300'>Sofa</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[1120px] left-[558px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Armchair</li></ul>
        <ul><li className='w-[286px] h-[18px] top-[1150px] left-[558px] absolute font-inter font-[16px]  text-[#272343] hover:text-[#007580] hover:underline'>Wing Chair</li></ul>
        <ul><li className='w-[286px] h-[18px]  font-[16px] top-[1185px] left-[558px] absolute leading-[17.6px] text-[#007580] underline'>Desk Chair</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[1215px] left-[558px] absolute leading-[17.6px] text-[#272343] hover:text-[#007580] hover:underline'>Wooden Chair</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[1245px] left-[558px] absolute leading-[17.6px] text-[#272343] hover:text-[#007580] hover:underline'>Park Bench</li></ul>

      <div className='w-[102px] h-[15px] font-inter font-[14px] top-[1050px] left-[750px] absolute text-[#9A9CAA]'>Support</div>
      <div className="flex items-center justify-center h-screen">
        <ul><li className='w-[200px] h-[128px] font-inter font-[14px] top-[1090px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline border-y-2 border-x-2 rounded-2xl border-transparent hover:border-[#9A9CAA]  transition-colors duration-300'>Help & Support</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[14px] top-[1120px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Tearms & Conditions</li></ul>
        <ul><li className='w-[286px] h-[18px] font-inter font-[14px] top-[1150px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Privacy Policy</li></ul>
        <ul><li className='w-[35px] h-[18px] font-inter font-[14px] top-[1180px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Help</li></ul>
</div>




    <div className='w-[102px] h-[60px] top-[1050px] left-[1000px] absolute text-[#9A9CAA] font-inter text-[17px] hover:underline'>NEWSLETTER</div>
    <div className='absolute top-[1120px] left-[970px]'>
    <div className="search flex items-center"> <input className="srch border border-[#E1E3E5] rounded-sm p-2 mr-2 w-[214px] h-[46px] text-[#9A9CAA]" type="search" name="" placeholder="Your email" /> <a href="#">   <button className="btn bg-[#029FAE] w-[120px] text-white p-2 rounded-lg">Subscribe</button> </a>
    <Image src='/footer2.png' alt='footer' className='absolute top-[80px] w-[540px] h-[40px]' width={640} height={40} ></Image>
    </div>
    </div>
    <div><Image src='/Frame 69.png' alt='frame' className='top-[1343px] overflow-hidden absolute w-[1543px] h-[74px] ' width={2000} height={200}></Image></div>




</div>
  )
}

export default page