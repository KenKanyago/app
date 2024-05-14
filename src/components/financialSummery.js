import React from "react";
import Card from "./card";



export default function FinacialSummery(){
    const income={
        title:"Total Period Income",
         text:"Ksh:1,680,000",
        color:"green-600",
    };

    const expenses={
        title:"Total Period Expenses",
        text:"Ksh:1,285,000",
        color:"red-600"
    }

    const savings={
        title:"My Savings",
        text:"Ksh:395,000",
        color:"green-600"
    }
    return(
        <div class="flex flex-row space-x-6 absolute top-0 left-1/3 my-4 ">
            
            <Card {... income}/>
            <Card {... expenses}/>
            <Card {... savings}/>

            

        </div>
       
        // <div class="flex flex-row space-x-6 absolute top-0 left-1/3 my-4 ">
        //     <Card {... income}/>
        //     <Card {... expenses}/>
        //     <Card {... savings}/>

            

        // </div>
        

        

    )
}