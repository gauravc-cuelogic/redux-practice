import React from "react";

const User = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {props.username}</p>
                </div>
            </div>
        </div>
    );
}

export default User;