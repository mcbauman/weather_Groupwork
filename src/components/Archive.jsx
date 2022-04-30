import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";



function Archive(){
    const {archieveData} = useContext(userContext)

    return(
        <div>
            {archieveData.map(item=><p>{item}</p>)}
        </div>
        
    )
}
export default Archive