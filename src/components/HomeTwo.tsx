import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HomeTwo = () => {
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
        <p className='border border-[#d6d7dd] w-[1343px] absolute top-[200px]'></p>

        </nav>

        <div className='bg-[#F0F2F3] w-[1000px] h-[700px] top-[220px] left-[260px] rounded-2xl absolute'>
          <h1 className='w-[177px] h-[14px] font-Inter text-[14px] absolute top-[210px] left-[50px] leading-[14px] text-[#272343]'>Welcome to chairy</h1>
          <h2 className='w-[557px] h-[198px] font-bold absolute top-[240px] left-[50px] text-[60px] leading-[66px] text-[#272343]'>Best Furniture Collection for your interior.</h2>
          <button className="img-one btn bg-[#029FAE] w-[160px] absolute top-[500px] left-[50px] text-white p-2 rounded-lg border-[#9a9caa] hover:bg-[#0d5a61] transition-all duration-200">Shop Now</button> 
              <Image src='/Product Image.png' alt='Product Image' className='img-one w-[334px] h-[484px] left-[640px] top-[115px] absolute' width={200} height={200}></Image>
              </div>

        <div className='w-[1000px] h-[139px] top-[950px] left-[260px] absolute justify-between hover:bg-[#c5cde6]'>
              <Image src='/Logo.png' alt='logo' className='img-one hover:bg-[#f0f2f8] rounded-2xl absolute' height={130} width={130}></Image>
              <Image src='/Logo (1).png' alt='logo 1' className='img-one hover:bg-[#f0f2f8] drop-shadow-md hover:drop-shadow-[#f0f2f8] left-[160px] top-[5px] rounded-2xl absolute' height={130} width={130}></Image>
              <Image src='/Logo (2).png' alt='logo 2' className='img-one hover:bg-[#f0f2f8] left-[300px] top-[5px] rounded-2xl absolute' height={130} width={130}></Image>
              <Image src='/Logo (3).png' alt='logo 3' className='img-one hover:bg-[#f0f2f8] left-[430px] top-[5px] rounded-2xl absolute' height={130} width={130}></Image>
              <Image src='/Logo (4).png' alt='logo 4' className='img-one hover:bg-[#f0f2f8] left-[550px] top-[5px] rounded-2xl absolute' height={130} width={130}></Image>
              <Image src='/Logo (5).png' alt='logo 5' className='img-one hover:bg-[#f0f2f8] left-[695px] top-[5px] rounded-2xl absolute' height={130} width={130}></Image>
              <Image src='/Logo (6).png' alt='logo 6' className='img-one hover:bg-[#f0f2f8] left-[865px] top-[5px] rounded-2xl absolute' height={130} width={130}></Image>
            </div>

        <h3 className='w-[px] h-[31px] top-[1140px] left-[250px] right-[250px] absolute  font-bold text-[30px]  text-[#272343] font-inter no-underline hover:underline'>Featured Product</h3>
            <div className='img-one w-[300px] h-[377px] top-[1210px] left-[1030px] absolute hover:'><Image src='/Products.png' alt='product 1' width={250} height={250}></Image></div>
            <div data-aos="zoom-out-up" className='img-one w-[312px] h-[377px] top-[1210px] left-[760px] absolute'><Image src='/Products (2).png' alt='product 2' width={250} height={250}></Image></div>
            <div className='img-one w-[312px] h-[377px] top-[1210px] left-[490px] absolute'><Image src='/Products (1).png' alt='product 3' width={250} height={250}></Image></div>
            <div className='img-one w-[300px] h-[377px] top-[1210px] left-[220px] absolute'><Image src='/Products (3).png' alt='produc 4' width={250} height={250}></Image></div>

            <h4 className='w-[px] h-[31px] top-[1590px] right-[930px] absolute  font-bold text-[30px]  text-[#272343] font-inter no-underline hover:underline'>Top categories</h4>
                <div className='img-one w-[400px] h-[377px] top-[1670px] left-[930px] absolute'><Image src='/Category.png' alt='category' width={350} height={350}></Image></div>
                <div className='img-one w-[420px] h-[377px] top-[1670px] left-[560px] absolute'><Image src='/Category (1).png' alt='category 1' width={350} height={350}></Image></div>
                <div className='img-one w-[420px] h-[377px] top-[1670px] left-[190px] absolute'><Image src='/Category (2).png' alt='category' width={350} height={350}></Image></div>

            <h5 className='w-[580px] h-[10px] top-[2350px] right-[880px] -rotate-90 absolute text-[27px] leading-[39.84px] no-underlineunderline hover:underline'>EXPLORE NEW AND POPULAR STYLES</h5>
                <div className='img-one w-[710px] h-[77px] top-[2170px] left-[205px] absolute'><Image src='/item-category 1.png' alt='product' width={510} height={510}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2425px] left-[1000px] absolute'><Image src='/card.png' alt='card 1' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2165px] left-[1000px] absolute'><Image src='/card (1).png' alt='card 2' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2165px] left-[730px] absolute'><Image src='/card (2).png' alt='card 3' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2425px] left-[730px] absolute'><Image src='/card (3).png' alt='card 4' width={250} height={250}></Image></div>

            <h6 className='w-[678px] h-[52px] top-[2770px] left-[590px]  absolute text-[39px] leading-[39.84px] no-underlineunderline hover:underline'>Our Products</h6>
              <div className='img-one w-[330px] h-[377px] top-[3225px] left-[1000px] absolute'><Image src='/Products(4).png' alt='card 1' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2900px] left-[1000px] absolute'><Image src='/Products(5).png' alt='card 2' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[3225px] left-[730px] absolute'><Image src='/Products(6).png' alt='card 3' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2900px] left-[730px] absolute'><Image src='/Products(7).png' alt='card 4' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[3225px] left-[460px] absolute'><Image src='/Products(8).png' alt='card 5' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2900px] left-[460px] absolute'><Image src='/Products(9).png' alt='card 6' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[3225px] left-[190px] absolute'><Image src='/Products (10).png' alt='card 7' width={250} height={250}></Image></div>
                <div className='img-one w-[330px] h-[377px] top-[2900px] left-[190px] absolute'><Image src='/Products(11).png' alt='card 8' width={250} height={250}></Image></div>

        <div className='w-[1343px] h-[343px] top-[3750px] absolute  bg-[#ffffff] border border-[#9A9CAA]'></div>
              <div><Image src='/Logo (7).png' alt='logo' className='w-[158px] h-[40px] gap-[8px] top-[3800px] left-[140px] absolute' width={140} height={40}></Image></div>
              <div><Image src='/footer.png' alt='footer' className='w-[340px] h-[80px] gap-[8px] top-[3870px] left-[140px] absolute' width={480} height={40}></Image></div>
              <SiFacebook className='w-[28px] h-[28px] border-1px text-[#007580] hover:text-[#083a3f] transition-colors duration-300 top-[3990px] left-[140px] absolute'/>
              <FaTwitter className='w-[28px] h-[28px] border-1px  hover:text-[#083a3f] transition-colors duration-300 top-[3995px] left-[180px] absolute'/>
              <FaInstagram className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[3995px] left-[220px] absolute'/>
              <FaPinterest className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[3995px] left-[260px] absolute'/>
              <FaYoutube className='w-[28px] h-[28px] border-1px hover:text-[#083a3f] transition-colors duration-300 top-[3995px] left-[300px] absolute'/>
        
              <div className='w-[102px] h-[15px] font-inter font-[14px] leading-[15.4px] top-[3820px] left-[558px] absolute text-[#9A9CAA]'>Category</div>
                <ul><li className='w-[180px] h-[178px] font-inter font-[16px] top-[3860px] left-[558px] absolute text-[#272343] hover:text-[#007580] hover:underline border-y-2 border-x-2 rounded-2xl border-transparent hover:border-[#9A9CAA]  transition-colors duration-300'>Sofa</li></ul>
                <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[3890px] left-[558px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Armchair</li></ul>
                <ul><li className='w-[286px] h-[18px] top-[3920px] left-[558px] absolute font-inter font-[16px]  text-[#272343] hover:text-[#007580] hover:underline'>Wing Chair</li></ul>
                <ul><li className='w-[286px] h-[18px]  font-[16px] top-[3955px] left-[558px] absolute leading-[17.6px] text-[#007580] underline'>Desk Chair</li></ul>
                <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[3985px] left-[558px] absolute leading-[17.6px] text-[#272343] hover:text-[#007580] hover:underline'>Wooden Chair</li></ul>
                <ul><li className='w-[286px] h-[18px] font-inter font-[16px] top-[4015px] left-[558px] absolute leading-[17.6px] text-[#272343] hover:text-[#007580] hover:underline'>Park Bench</li></ul>
        
              <div className='w-[102px] h-[15px] font-inter font-[14px] top-[3800px] left-[750px] absolute text-[#9A9CAA]'>Support</div>
              <div className="flex items-center justify-center h-screen">
                <ul><li className='w-[200px] h-[128px] font-inter font-[14px] top-[3860px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline border-y-2 border-x-2 rounded-2xl border-transparent hover:border-[#9A9CAA]  transition-colors duration-300'>Help & Support</li></ul>
                <ul><li className='w-[286px] h-[18px] font-inter font-[14px] top-[3890px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Tearms & Conditions</li></ul>
                <ul><li className='w-[286px] h-[18px] font-inter font-[14px] top-[3920px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Privacy Policy</li></ul>
                <ul><li className='w-[35px] h-[18px] font-inter font-[14px] top-[3955px] left-[750px] absolute text-[#272343] hover:text-[#007580] hover:underline'>Help</li></ul>
        </div>
        
        
        
        
            <div className='w-[102px] h-[15px] top-[3800px] left-[1033px] absolute text-[#9A9CAA] font-inter text-[17px] hover:underline'>NEWSLETTER</div>
            <div className='absolute top-[3860px] left-[970px]'>
            <div className="img-one search flex items-center"> <input className="srch border border-[#E1E3E5] rounded-sm p-2 mr-2 w-[214px] h-[46px] text-[#9A9CAA]" type="search" name="" placeholder="Your email" /> <a href="#">   <button className="btn bg-[#029FAE] w-[120px] text-white p-2 rounded-lg">Subscribe</button> </a>
           <Image src='/footer2.png' alt='footer' className='img-one  absolute top-[90px] w-[540px] h-[40px]' width={640} height={40} ></Image>
            </div>
            </div>  
            <div><Image src='/Frame 69.png' alt='frame' className='top-[4093px] overflow-hidden absolute w-[1843px] h-[74px] ' width={1600} height={200}></Image></div>
        

</div>
  )
}
export default HomeTwo
