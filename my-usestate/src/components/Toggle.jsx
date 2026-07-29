import { useState } from "react";
function Toggle(){
  const[show,setShow]=useState(true);
  return(
    <div>
      <button onClick={()=> setShow(show=>!show)}>
        {show ? 'hide':'show'}
      </button>
      {show && <h3>welcom useState in react!</h3>}
    </div>
  );
}
export default Toggle;