
import { data } from "./data"
export default function Catagories(){
    
    return (
        <>
            <div className="category">
                {
                    data.map((value, index) =>{
                        return(
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}