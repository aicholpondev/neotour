import "../Details/details.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";


export default function Details(){
    return(
     <section>
         <div className="detail-background"></div>
         <div className="detail-general-text">
             <h1>Mount Fuji</h1>
             <div className="detail-location flex items-center gap-2 pl-5 font-bold">
                < IoLocationOutline/>
                 <h3>Honshu, Japan</h3>
             </div>
             <div className="detail-description">
                 <h2 className="text-2xl font-bold p-5">Description</h2>
                 <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.</p>
             </div>
             <div className="detail-reviews">
                 <h2 className="text-2xl font-bold p-5">Reviews</h2>
                 <div className="detail-reviews-text flex items-center gap-2 pl-5 font-bold">
                     <IoPersonCircleSharp />
                     <h4>Anonymous</h4>
                 </div>
                 <p className="p-5">That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                 <div className="detail-reviews-text flex items-center gap-2 pl-5 font-bold">
                     <IoPersonCircleSharp />
                     <h4>Anonymous</h4>
                 </div>

                 <p className="p-5">That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>

                 <button className="book-btn">Book now</button>
             </div>
         </div>
     </section>
    )
}