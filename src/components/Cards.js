import React from "react";
// import "../Home.css"
// import './card.css';

function Card({logo,posted,contract,position,company,location,color,}){
    return (
        <div className="main">
          <div className="rectangle">
            <div className="innergroup">
               <div className="postedContract">
                 {contract}
               </div>
               <div className="role">
                {position}
                </div>
                <div className="company">
                 {company}
                </div>
     
                <div className="location">
                   {location}
                </div>
            </div>
     
            </div>
            <div className="logo" style={{backgroundColor:color}} >
            <img className="svg" alt="logo" src ={logo}/>
          </div>
        </div>
       )
}

export default Card