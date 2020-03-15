import React from "react";

const UserProfile=(props) => {
        console.log(props);
        let { role, name , img} = props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} />
                        
                    </div>
                    <div className="col-md-6">z
                            <h4>{role}</h4>
                        </div>
                        <button type="button" className="btn btn-primary">{name}</button>
           
                </div>
            </div>
        )
    };
export default UserProfile;
