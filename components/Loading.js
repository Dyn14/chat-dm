import { DoubleBounce } from 'better-react-spinkit';
import React from 'react';

function Loading() {
  return (
    <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
        <div>
            <DoubleBounce color="green" size={70} />
        </div>
    </center>
    
  )
}

export default Loading