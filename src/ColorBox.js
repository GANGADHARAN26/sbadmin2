import React from "react";
   


function ColorBox({boxcolor,boxtitle,boxcolorcode}){
    return(
            <div className="col-lg-6 mb-4">
                <div className={`card bg-${boxcolor} text-white shadow`}>
                    <div className="card-body">
                        {boxtitle}
                        <div>
                            {boxcolorcode}
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default ColorBox