
import { Sdata  } from "./Sdata"
export default function SlideData({id,title,desc, cover}){
    return(
        <div className="box d_flex top" key={id}>
            <div className="left">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button className="btn-primary">Visit Collection</button>
            </div>
            <div className="right">
                <img src={cover}  />
            </div>
        </div>

         
       
        
    )
}