import styles from "./discover.module.css";
import React from "react";
import Slider from "react-slick";
import img from "../../assets/image/discover-img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Discover (){

    return (
           <section id="discover-general">
               <h1 className={styles.title} >Discover</h1>
              <div className="discover-general-block flex justify-between">
                  <div className="discover-text flex gap-10  pl-[50px] font-bold text-2xl">
                      <h3 className={styles.discover_category}>Popular</h3>
                      <h3 className={styles.discover_category}>Featured</h3>
                      <h3 className={styles.discover_category}>Most Visited</h3>
                      <h3 className={styles.discover_category}>Europe</h3>
                      <h3 className={styles.discover_category}>Asia</h3>
                  </div>
                  <div className="flex items-center gap-2 ">
                      <button className={styles.discover_click}><FaArrowRightLong /></button>
                      <button className={styles.discover_click}> <FaArrowLeftLong /></button>

                  </div>
              </div>

                       <div className="flex justify-around pt-5">
                           <img  src={img} alt="img"/>
                           <img src={img} alt="img"/>
                           <img src={img} alt="img"/>
                       </div>




           </section>




    )
}