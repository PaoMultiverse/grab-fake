import React from "react";
import PromoInWhere from "./PromoInWhere";
import BackgroundHeader from "./BackgroundHeader";
import Category from "./Category";
import PopularQuestions from "./PopularQuestions";
import CarourelPromo from "./CarourelPromo";
function Home(){
    return(
        <>
            <div>
            <div className="hidden sm:block"> {/* Thẻ div này sẽ bị ẩn khi màn hình nhỏ hơn hoặc bằng sm */}
                <BackgroundHeader/>
            </div>
                <PromoInWhere/>
                <CarourelPromo/>
                <Category/>
                <PopularQuestions/>
            </div>
            
        </>
    )
}

export default Home;