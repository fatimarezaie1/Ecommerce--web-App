import React,{useState} from 'react';
import {productItem} from './productItem'
import { FaStar ,FaPlus,FaArrowRight,FaArrowLeftLong} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import react from '@vitejs/plugin-react-swc';


export default function FlashCard(){
   
    
    function NextArrow(props){
        const {onClick} = props
        return(
            <div className="control-btn" onClick={onClick}>
                <button className="next">
                    <i className="fa-right-arrow"><FaArrowRight/></i>
                </button>
            </div>
        )
    }
    function PrevArrow(props){
        const {onClick} = props
        return(
            <div className="control-btn" onClick={onClick}>
                <button className="prev">
                    <i className="fa-left-arrow"><FaArrowLeftLong/></i>
                </button>
            </div>
        )
    }
    
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
      
    return(
        <>
        <Slider {...settings}>
            {
                productItem.map((item,index) =>{
                    return(
                        <div className="box" key={index}>
                    <div className="product mtop">
                        <div className="img">
                            <span className="discount">{item.discount} % Off</span>
                            <img src={item.cover} alt="" />
                            <div className="product-like">
                                <label>0</label> <br />
                                <i className="fa-heart" ><FaRegHeart/></i> 
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{item.name}</h3>
                            <div className="rate">
                                <i className="fa-star">
                                    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                </i>
                            </div>
                            <div className="price">
                                <h4>{item.price} .00</h4>
                                <button>
                                    <i className="fa-plus" ><FaPlus/></i>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
                    )
                })
            }
        </Slider>
        </>
    )
}