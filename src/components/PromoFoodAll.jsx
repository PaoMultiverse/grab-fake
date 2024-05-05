import React from "react";
import icRate from "../assets/icon-rate.png";
import icClock from "../assets/icon-clock.png";
import icDot from "../assets/icon-dot.png";
import PromoFoodList from "./PromoFoodList";
import { Link } from "react-router-dom";
function PromoFood(props){
    return (
        <><div className='my-[30px] mx-[1%] w-[48%] md:w-[23%] sm:w-[30%] '>
                <Link to="/StoreMeal" style={{textDecoration:"none", color:"black"}}>
                    <div className="pro-img-box w-full h-[130px] overflow-hidden rounded-2">
                        <img className='img-food w-full' src={PromoFoodList[props.url]} alt="" />
                    </div>
                    <h5>{props.name}</h5>
                    <p>{props.type}</p>
                    <p className="flex align-middle">
                    <img className='w-[18px] h-fit ml-[4px] mr-[2px]' src={icRate} alt="icon-rate" /> {props.rate}
                    <img className='w-[18px] h-fit ml-[4px] mr-[2px]' src={icClock} alt="icon-clock" /> {props.time}
                    <img className='w-[18px] h-fit ml-[4px] mr-[2px]' src={icDot} alt="icon-dot" /> {props.km}               
                    </p>
                </Link>
            </div>
        </>
    )
}
export default PromoFood;