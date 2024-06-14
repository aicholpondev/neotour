import React from "react";
import styles from "./headercard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/image/winter-header.png";
export default function HeaderCard(){
    return(
       <section >
           <div className="header-general flex items-center justify-around p-[70px] ">
               <div className="header-text">
                   <h1 className="font-bold text-8xl ">Winter <br/> Vacation Trips</h1>
                   <p className="font-bold text-2xl w-2/4 p-[2rem]">Enjoy your winter vacations with warmth
                       and amazing sightseeing on the mountains.
                       Enjoy the best experience with us!</p>
                   <div className="flex items-center gap-4 text-3xl text-[#6A62B7]">
                       <a href="#" className="text-white text-2xl rounded-3xl  ">Let’s Go!  </a><FaArrowRightLong className="cursor-pointer"/>
                   </div>
               </div>
               <div className="header-image">
                   <img src={img} alt="img"/>
               </div>
           </div>
           <hr />

       </section>




    )
}