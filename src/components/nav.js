import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


export default function Nav(){

     
      const[isOpen, setIsOpen] = useState(false)

      const handleToggle = ()=>{
        setIsOpen(!isOpen);
      }
     
    return(
       
        <div class={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col  px-4 py-8  transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div class="flex items-center mb-8">

          <span class="text-xl font-bold ml-2 flex flex-row-reverse space-x-1.5" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />My Budgets
          </span>
        
        
        
        </div>

        <nav>
          <ul class="space-y-2">
            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Dashboard</span>
              </button>
            </li>

            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span >My Wallet</span>
              </button>
            </li>

            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Analytics</span>
              </button>
            </li>

            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Market</span>
              </button>
            </li>

            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Cards</span>
              </button>
            </li>

            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Transfers</span>
              </button>
            </li>

            <li>
              <button class="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Settings</span>
              </button>
            </li>

            </ul>
          </nav>
      </div>



    )
}