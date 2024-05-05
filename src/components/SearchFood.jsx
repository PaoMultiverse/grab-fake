
import Option from "./Option"
import React from "react"
import CarourelPromo from "./CarourelPromo"

function SearchFood(){
 
    const optionData = [
        {
            id:1,
            name : "Gần tôi"
        },
        {
            id:2,
            name : "Trưa - Đồng Giá"
        },
        {
            id:3,
            name : " Tuần lễ món cơm"
        },
        {
            id:4,
            name : "5 Ưu đãi cùng 1 đơn"
        },
        {
            id:5,
            name : "Quán ngon đặc tuyển"
        },
    ]
    const optional = optionData.map((item) => <Option name={item.name}/>)
    
    return(
        <>
        <div className="search-food w-full"></div>
            <div className="container ">
                <div className="space h-[100px]"></div>
                <div className="search-food-bar w-full">
                    <input className="w-full min-h-[50px] pl-[70px] box-border bg-[#e6e6e6] bg-iconSearch bg-no-repeat bg-center bg-[20px] rounded-[30px]" type="text" id="search-bar-input" placeholder="Tìm món hoặc quán ăn"/>
                </div>
                <div className="container-option w-full h-inherit flex flex-wrap md:justify-between mt-[20px] mb-[40px] ">
                    {optional}
                </div>
                <div className="">
                
                </div>
            </div>
            <div style={{height:"5px",backgroundColor:"#c3c3c3"}}></div>
            <div className="container">
                
            </div>
        </>
    )
}

export default SearchFood;