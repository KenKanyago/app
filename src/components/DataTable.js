import React from "react";

export default function DataTable ({headers, data}) {
return(
        <div class='my-4'>
            <h2>Recent Transactions</h2>
            <table class='w-full rounded-lg shadow-md overflow-hidden'>
                <thead>
                    <tr class='bg-gray-100 text-left text-xs font-semibold'>
                        {headers.map((header, index) =>(
                            <th key={index} class='px-4 py-2'>{header}</th>
                        )) }
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-100">
                    {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2">{cell}</td>
                ))}
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    )
}