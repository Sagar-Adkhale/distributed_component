import React from "react";

const WarnButton = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
            {props.children}
                <div className="col-md-12">
                    <button type="button" class="btn btn-outline-primary">ACCEPT</button>
                     &nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-danger">REJECT</button>
                </div>
                <div className="col-md-6">
          

                </div>
            </div>
        </div>
    )
};

export default WarnButton;