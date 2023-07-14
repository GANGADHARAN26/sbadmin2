import React from "react";
import RightBoxOne from "./RightBox2";


function RightBox(){
    return(
        
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..."></img>
                        </div>
                        <p>Add some quality, svg illustrations to your project courtesy of unDraw, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                    </div>
                </div>
                <RightBoxOne/>
            </div>

        )
}
export default RightBox;