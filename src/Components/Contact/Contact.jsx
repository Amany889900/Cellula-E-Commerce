


function Contact() {
  return (
    <>
    <div className="w-[80%] mx-auto mt-60 mb-40">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 bg-white p-5 shadow-2xl border-2 border-white">
           <div className="p-5 border-b-1 mb-10">
            <div className="flex">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#DB4444] text-white mr-10"><i class="fa-solid fa-phone"></i></div>
              <p className="font-medium text-[16px] leading-[24px] self-center">Call Us</p>
            </div>
            <p className="my-5 text-[14px] leading-[21px]">We are available 24/7, 7 days a week.</p>
            <p className="my-5 text-[14px] leading-[21px]">Phone: +8801611112222</p>
           </div>
           <div className="p-5  mb-10">
             <div className="flex">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#DB4444] text-white mr-10"><i class="fa-solid fa-envelope"></i></div>
              <p className="font-medium text-[16px] leading-[24px] self-center">Write To Us</p>
            </div>
            <p className="my-5 text-[14px] leading-[21px]">Fill out our form and we will contact <br /> you within 24 hours.</p>
            <p className="my-5 text-[14px] leading-[21px]">Emails: customer@exclusive.com</p>
            <p className="my-5 text-[14px] leading-[21px]">Emails: support@exclusive.com</p>
           </div>
        </div>
        <div className="w-full lg:w-2/3 bg-white p-15 shadow-2xl border-2 border-white">
         <div className="flex justify-between mb-10">
    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" />
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" />
    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone" />    
         </div>
          <textarea id="message" rows="10" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message"></textarea>
         <div className="mt-10 flex">
           <button type="submit" className="text-white ms-auto  bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[143px] h-[56px]  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
         </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact