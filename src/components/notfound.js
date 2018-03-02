import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = props =>{
    return(
        <div>
            Error 404 ! Page Not Found .
            <p>Go Back to <Link to="/">Dashboard</Link></p>
        </div>
    )
}

export default NotFound;
