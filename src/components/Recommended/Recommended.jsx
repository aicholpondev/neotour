import img from "../../assets/image/recommended-img.png";
import styles from "./recomended.module.css";
export  default function Recommended (){
    return(
      <section >
          <h1 className={styles.title}>Recommended</h1>
          <div className="flex justify-around">
              <img src={img} alt=""/>
              <img src={img} alt=""/>
              <img src={img} alt=""/>
              <img src={img} alt=""/>
          </div>
      </section>
    )
}