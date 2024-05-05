import React, { useState } from "react";
import { Drawer } from "antd";
import plusIcon from "../assets/plus-white.svg";
import food1 from "../assets/meal/food1.webp";
import food2 from "../assets/meal/food2.webp";
import food3 from "../assets/meal/food3.webp";
import food4 from "../assets/meal/food4.webp";

const DetailMeal = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const mealsData = [
    {
      title: "Combo Rice With Chicken Thigh Includes Coca Coca 50% Off",
      description: "Mỗi phần ăn bao gồm 01 bịch tương ớt, 01 bịch nước tương.",
      price: 28000,
      imageSrc: food1,
    },
    {
      title: "Combo Rice With Chicken Thigh And Sauce",
      description:
        "Combo Includes Chicken Thigh Rice With Optional Sauce And Cold Seaweed Soup",
      price: 45750,
      imageSrc: food2,
    },
    {
      title: "Rice With Grilled Pork",
      description: "Mỗi phần ăn bao gồm 01 bịch tương ớt, 01 bịch nước tương.",
      price: 35000,
      imageSrc: food3,
    },
    {
      title: "Rice With Chicken Thigh Without Sauce",
      description:
        "Combo Includes Chicken Thigh Rice With Optional Sauce And Cold Seaweed Soup",
      price: 45750,
      imageSrc: food4,
    },
  ];

  const handleClick = (meal) => {
    setSelectedMeal(meal);
    setQuantity(1);
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-3xl mb-8">Promotion Combo</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {mealsData.map((meal, index) => (
          <div key={index}>
            <div className="card bg-white shadow-md rounded-lg cursor-pointer row mx-2 relative" style={{ height: "210px" }} onClick={() => handleClick(meal)}>
  <div className="col-6">
    <img
      src={meal.imageSrc}
      className="card-img object-cover "
      alt="Meal"
      style={{ width: "150px", height: "150px" }}
    />
  </div>
  <div className="col-6">
    <h5 className="font-semibold text-lg mb-2">{meal.title}</h5>
    <p className="text-gray-600 text-sm mb-2">{meal.description}</p>
    <p className="font-semibold">{meal.price}</p>
  </div>
  <div className="absolute bottom-0 left-0 mb-2 ml-2">
    <button
      className="rounded-full bg-blue-500 p-1"
      onClick={() => handleClick(meal)}
    >
      <img src={plusIcon} alt="Add" className="w-6 h-6" />
    </button>
  </div>
</div>

          </div>
        ))}
      </div>
      <Drawer
        width={600}
        visible={visible}
        closable={false}
        onClose={closeDrawer}
      >
        <div>
          <button onClick={() => closeDrawer()  }>
          Tắt
          </button>
        </div>
        {selectedMeal && (
          <div className="card" style={{ width: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={selectedMeal.imageSrc}
                  alt=""
                  style={{
                    margin: "15px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div
                  className="card-body"
                  style={{ textAlign: "left", marginLeft: "5px" }}
                >
                  <h2>{selectedMeal.title}</h2>
                  <p>{selectedMeal.description}</p>
                  <p>{selectedMeal.price}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="btnQty">
          <div className="container text-center">
            <div className="row align-items-start">
              <div
                className="col col-3"
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <button className="btnMP" onClick={handleDecreaseQuantity}>
                  -
                </button>
                <span style={{ fontSize: 20, margin: "0 10px" }}>
                  {quantity}
                </span>{" "}
                <button className="btnMP" onClick={handleIncreaseQuantity}>
                  +
                </button>
              </div>
              <div className="col col-7">
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ width: "100%" }}
                >
                  {selectedMeal &&
                    `Add to Basket - ${selectedMeal.price * quantity} ₫`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DetailMeal;
