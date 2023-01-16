import React from 'react';
import Image from 'next/image';

import LogoFooter from '../assets/logo-footer.png';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <div className="h-80 mx-40 grid grid-rows-1 grid-cols-6 gap-4">
        <div className="flex flex-col col-span-3 gap-4">
          <Image 
            src={LogoFooter}
            alt="Logo image"
            className="h-10 w-32 object-contain"
          />
          <p className="text-gray-600 opacity-80 text-sm">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
          <div className="w-full grid grid-cols-12 grid-rows-1">
            <div className="col-span-5 my-6 text-sm">
              <p className="opacity-80">Got Question? Call us 24/7</p>
              <p className="text-2xl text-green-600 opacity-70">+0123 456 789</p>
            </div>
          
            <div className="col-span-7 my-5">
              <p className="opacity-80">Payment Method</p>
              <div className="flex">

              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h6>Information</h6>
          <p className="my-2 mt-6 text-gray-600 opacity-80 text-sm">About Molla</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">How to shop on Molla</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">FAQ</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Contact us</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Log in</p>
        </div>
        
        <div className="flex flex-col">
          <h6>Customer Service</h6>
          <p className="my-2 mt-6 text-gray-600 opacity-80 text-sm">Payment Methods</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Money-back gurantee!</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Returns</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Shipping</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Terms and conditions</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Privacy Policy</p>
        </div>
      
        <div className="flex flex-col">
          <h6>My Account</h6>
          <p className="my-2 mt-6 text-gray-600 opacity-80 text-sm">Sign In</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">View Cart</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">My Wishlist</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Track My Order</p>
          <p className="my-2 text-gray-600 opacity-80 text-sm">Help</p>
        </div>
      </div>

      <div class="h-16 mx-40 p-4 text-gray-600 flex justify-between items-center border-t-[1px] border-gray-400">
    	  <div className="flex gap-2 items-center">
          <p>Copyright © 2023 Molla Store. All Rights Reserved.</p>
          <p className="underline-offset-4"><u>Terms of Use</u></p>
          <div className="w-0.5 h-4 mt-1.5 bg-gray-600 rounded-full opacity-50" />
          <p className="underline-offset-4"><u>Privacy Policy</u></p>
        </div>

        <div className="flex gap-2 items-center">
          <p>Social Media</p>
          <FaFacebookF className="text-blue-600"/>
          <AiOutlineInstagram className="text-pink-600" />
          <AiOutlineTwitter className="text-cyan-600" />
          <AiOutlineYoutube className="text-red-600" />
          <BsPinterest className="text-red-800" />
        </div>
      </div>
    </div>
  )
}

export default Footer