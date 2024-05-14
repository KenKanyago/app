import React from "react";
import FinacialSummery from "./financialSummery";

export default function Card({title, text, color},){
    return(
<> 
<div class="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
                <h4 class={`text-xl font-semibold mb-2"`}>{title}</h4>
                <p class={`text-2xl font-bold text-${color}`}>{text}</p>
            </div>
          

            {/* <div class="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
                <h4 class="text-xl font-semibold mb-2">Total Period Expenses</h4>
                <p class="text-2xl font-bold text-red-600">Ksh:1,285,000</p>
            </div>

            <div class="max-w-md rounded-lg overflow-hidden shadow-md bg-white">
                <h4 class="text-xl font-semibold mb-7" >My Savings  </h4>
                <p class="text-2xl font-bold text-green-600">Ksh:395,000</p>
            </div> */}
   </>     
 
    )
   

}