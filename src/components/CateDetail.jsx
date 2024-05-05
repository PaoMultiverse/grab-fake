import React from "react";

function CateDetail(prop){
    return(
        <>
             <div className="Cate md:w-[23%] sm:w-[30%] w-[48%]  m-[1%]">
                <a className="cateLink no-underline text-black flex flex-col justify-center items-center" href="#">
                    <div className="image-cate-box rounded-[5px] w-[90%] overflow-hidden mb-[5%]">
                        <img className="image-cate w-full" src={prop.url} alt="" />
                    </div>
                    <h6 className="name-cate w-fit m-auto">{prop.name}</h6>
                </a>
            </div>
        </>
    )
}
export default CateDetail;