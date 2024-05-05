import DetailMeal from "./DetailMeal";
import "./StyleSheet.css"
import { Tabs } from "antd" 
import { Link } from "react-router-dom";
import icRate from "../assets/icon-rate.png";
import icClock from "../assets/icon-clock.png";
import icDot from "../assets/icon-dot.png";
function StoreMeal(){
    return(
        <>
            <div className="search-food mb-[20px] border-b-[solid 10px black] w-full h-max"></div>
                <div className="container ">
                    <div className="space h-[100px]"></div>
                    <div className="search-food-bar w-full">
                        <h6><Link to="/GrabFake" style={{textDecoration : "none"}}>Trang chủ</Link> &gt; <Link to="/Restaurant" style={{textDecoration : "none"}}>Nhà hàng</Link>&gt; Cơm Tấm Bốn Phương Quán</h6>
                        <h1>Cơm Tấm Bốn Phương Quán</h1>
                        <p>Cơm</p>
                        <p className="flex">
                            <img className='icon-in-food w-[24px] mr-2 ml-4' src={icRate} alt="icon-rate" /> 4.4
                            <img className='icon-in-food w-[24px] mr-2 ml-4' src={icClock} alt="icon-clock" /> 25 phút
                            <img className='icon-in-food w-[24px] mr-2 ml-4' src={icDot} alt="icon-dot" /> 3.5 km
                        </p>
                        <div className="flex ">
                        <p>Giờ mở cửa</p>
                        <p  className="ml-20">Hôm nay 00:00-23:59</p>
                        </div>
                    </div>
                    <div className="container-option">
                        
                    </div>
                    <div className="">
                    
                </div>
           
                    <Tabs defaultActiveKey="tab1">
                    <Tabs.TabPane
                    tab={<span className="tab-title">Promotion Combo</span>}
                    key="tab1"
                    >
                    <DetailMeal />
                    </Tabs.TabPane>
                    <Tabs.TabPane
                    tab={<span className="tab-title">Bestseller Chicken Rice</span>}
                    key="tab2"
                    >
                    <DetailMeal />
                    </Tabs.TabPane>
                    <Tabs.TabPane
                    tab={<span className="tab-title">Món ăn kèm</span>}
                    key="tab3"
                    >
                    <div> Chào cô ạ</div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}
export default StoreMeal