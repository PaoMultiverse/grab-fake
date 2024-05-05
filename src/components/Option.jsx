import ImageOption from "../assets/placeholder-restaurant.jpg"
import React from "react";

function Option(prop){
    return (
        <>
            <div className="option w-[48%] md:w-[18%] m-[1%] overflow-hidden rounded-[10px] flex justify-center items-center relative">
                <img id="imgOption" src={ImageOption} alt="" />
                <div className="overlay absolute w-full h-full bg-black bg-opacity-50 z-1"></div>
                <div className="imgText absolute text-white text-[20px] font-bold drop-shadow-md z-2">{prop.name}</div>
            </div>
        </>
    )
}

export default Option;