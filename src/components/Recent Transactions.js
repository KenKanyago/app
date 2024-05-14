import React from "react";
import DataTable from "./DataTable";




export default function RecentTransactions(){

        const transactionHeaders = ['Transaction Date', 'Name of Transaction', 
        'Total Amount', 'Status', 'Note', 'Actions']
        const transactionData = [
            ['14/05/2024', 'Reant Payment', 45000, 'Expense', 'My Expenses', ':' ]
        ];
        
    


    return(
        <div>
            <h1>Recenrt Transactions</h1>
            <DataTable headers={transactionHeaders} data={transactionData}/> 
        </div>
    )
}
