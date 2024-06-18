import React from "react";
import Content from "../assets/HomeContent.json";
let HeroContent = Content[0];
import Slider from "react-slick";
console.log(Content);
export default function IndexHero() {
  const renderItems = (itemList) => {
    return itemList.map((item) => (
      <li className="index_hero_item" key={item.id}>
        {item.name}
        {item.children && (
          <ul className="index_heroinnermenu">{renderItems(item.children)}</ul>
        )}
      </li>
    ));
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="index_hero">
        <div className="container">
          <div className="index_hero_wp">
            <div className="index_heroleft">
              <ul className="index_heromenu">
                {renderItems(HeroContent["heroMenu"])}
              </ul>
            </div>
            <div className="index_heroright">
              <Slider className="index_sliderwp" {...settings}>
                {HeroContent["heroSliders"] != 0 &&
                  HeroContent["heroSliders"].map((item, i) => (
                    <div className="index_slideritem" key={i}>
                      <div className="index_slideritemimg">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
