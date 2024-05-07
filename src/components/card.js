import React from "react";


export default function Card(){
    return(
<div> 
        
        <div class="flex flex-row space-x-6 absolute top-0 left-1/3 my-4">
            <div class="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
            <h4 class="text-xl font-semibold mb-2">Total Period Income</h4>
            <p class="text-2xl font-bold text-green-600">Ksh:1,680,000</p>
            </div>

            <div class="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
                <h4 class="text-xl font-semibold mb-2">Total Period Expenses</h4>
                <p class="text-2xl font-bold text-red-600">Ksh:1,285,000</p>
            </div>

            <div class="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
                <h4 class="text-xl font-semibold mb-7" >My Savings  </h4>
                <p class="text-2xl font-bold text-green-600">Ksh:395,000</p>
            </div>
        </div>
 </div>
    )
   

}