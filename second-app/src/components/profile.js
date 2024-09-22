import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
    return ( <div>
        <h1>name :{props.name}</h1>
        <h1>age:{props.age}</h1>
    </div> );
}


Profile.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}
export default Profile;