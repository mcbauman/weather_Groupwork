import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";


function Taf(){
    const {location, taf} = useContext(userContext)

    return(
        <div>
            <span style={{fontSize:'1.5rem', fontWeight: 'bold'}}>{location}</span> <hr/>
            <strong>TAF: </strong>{taf}
        </div>
    )
}
export default Taf