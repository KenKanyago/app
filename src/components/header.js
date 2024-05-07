import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header(){
    return(
        
        <body>
            <div class="grid grid-cols-2">
                <div >
                    <nav className="navbar">
                        <ul>
                        <div><button>Dashboard</button></div> 
                            <div><button>My wallet</button></div>
                            <div><button>Analysis</button></div>
                            <div><button>Market</button></div>
                            <div><button>Cards</button></div>
                            <div><button>Transfer</button></div>
                            <div><button>Setting</button></div>
                        </ul>   
                    </nav>
                </div>

                <div class= "flex-1">
                    <div>
                    <h4>Total Period Income</h4>
                    <p>Ksh:1,680,000</p>
                    </div>

                    <div>
                        <h4>Total Period Income</h4>
                        <p>Ksh:1,680,000</p>
                    </div>

                    <div>
                        <h4>Total Period Income</h4>
                        <p>Ksh:1,680,000</p>
                    </div>
                </div>

            </div>
        </body>
    )
}