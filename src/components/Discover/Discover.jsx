import styles from "./discover.module.css";
import React from "react";
import Slider from "react-slick";
import img from "../../assets/image/discover-img.png";
export default function Discover (){

    return (
           <section id="discover-general">
               <h1 className={styles.title} >Discover</h1>
               <div className="discover-text flex gap-10  pl-[50px] font-bold text-2xl">
                   <h3 >Popular</h3>
                   <h3>Featured</h3>
                   <h3>Most Visited</h3>
                   <h3>Europe</h3>
                   <h3>Asia</h3>
               </div>

                       <div className="flex justify-around pt-5">
                           <img src={img} alt="img"/>
                           <img src={img} alt="img"/>
                           <img src={img} alt="img"/>
                       </div>




           </section>




    )
}