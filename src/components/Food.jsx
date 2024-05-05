import PromoFoodAll from './PromoFoodAll';
import { Link } from 'react-router-dom';

function Food(){
    
    const foodData =[
        {
          id:1,
          name: "Cơm thập cẩm",
          type: "Cơm",
          imageUrl:"food1",
          rate: "4.2",
          time:"20 phút",
          km: "2.3 km"
        },
        {
          id:2,
          name: "Bánh trứng",
          type: "Bánh mặn",
          imageUrl:"food2",
          rate: "4.6",
          time:"22 phút",
          km: "2.4 km"
        },
        {
          id:3,
          name: "Bánh lọt",
          type: "Chè - Giải nhiệt",
          imageUrl:"food3",
          rate: "4.7",
          time:"19 phút",
          km: "1.3 km"
        },
        {
          id:4,
          name: "Pizza Hải Sản",
          type: "Thức ăn nhanh",
          imageUrl:"food4",
          rate: "4.2",
          time:"25 phút",
          km: "2.0 km"
        },
        {
          id:5,
          name: "Sushi Cá Hồi",
          type: "Cơm - Đồ Sống",
          imageUrl:"food5",
          rate: "4.5",
          time:"35 phút",
          km: "4.1 km"
        },{
          id:6,
          name: "Beefsteak Kobe",
          type: "Đồ ăn hảo hạng",
          imageUrl:"food6",
          rate: "3.2",
          time:"25 phút",
          km: "3.2 km"
        },{
          id:7,
          name: "Bánh xếp chiên Mandu",
          type: "Điểm tâm",
          imageUrl:"food7",
          rate: "4.8",
          time:"45 phút",
          km: "5.0 km"
        },
        {
          id:8,
          name: "Cơm thập cẩm",
          type: "Cơm",
          imageUrl:"food1",
          rate: "4.2",
          time:"20 phút",
          km: "2.3 km"
        },
        {
          id:9,
          name: "Bánh trứng",
          type: "Bánh mặn",
          imageUrl:"food2",
          rate: "4.6",
          time:"22 phút",
          km: "2.4 km"
        },
        {
          id:10,
          name: "Bánh lọt",
          type: "Chè - Giải nhiệt",
          imageUrl:"food3",
          rate: "4.7",
          time:"19 phút",
          km: "1.3 km"
        },
        {
          id:11,
          name: "Pizza Hải Sản",
          type: "Thức ăn nhanh",
          imageUrl:"food4",
          rate: "4.2",
          time:"25 phút",
          km: "2.0 km"
        },
        {
          id:12,
          name: "Sushi Cá Hồi",
          type: "Cơm - Đồ Sống",
          imageUrl:"food5",
          rate: "4.5",
          time:"35 phút",
          km: "4.1 km"
        },{
          id:13,
          name: "Beefsteak Kobe",
          type: "Đồ ăn hảo hạng",
          imageUrl:"food6",
          rate: "3.2",
          time:"25 phút",
          km: "3.2 km"
        },{
          id:14,
          name: "Bánh xếp chiên Mandu",
          type: "Điểm tâm",
          imageUrl:"food7",
          rate: "4.8",
          time:"45 phút",
          km: "5.0 km"
        },
      ]
    const foodpromo = foodData.map((item) => {
        return (
          <PromoFoodAll 
            key={item.id} 
            name={item.name} 
            type={item.type} 
            url={item.imageUrl}
            rate={item.rate}
            time={item.time}
            km={item.km}
          />
        );
      });

    return(
        <>
        <div className='container mt-20'>
          <h5><Link to="/GrabFake" style={{textDecoration : "none"}}>Trang chủ</Link> &gt; <Link to="/Restaurant" style={{textDecoration : "none"}}>Nhà hàng</Link>&gt;</h5>
          <div className='flex flex-wrap '>
                      {foodpromo}
            </div>
        </div>
        
        </>
    )
}
export default Food;