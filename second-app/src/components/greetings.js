import { useState } from "react";

function Greetings(props) {
    
    
    return ( <div>
       
        
        <h5>hello...{props.name}</h5>
    </div> );
}

Greetings.defaultProps={
    name:'Guest'
}
export default Greetings;