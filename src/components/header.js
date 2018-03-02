import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <div>
            <h1>Money Monitor</h1>
            <nav>
                <NavLink activeClassName="active" exact to="/">Dashboard</NavLink>
                <NavLink activeClassName="active" to="/addexpense">Add Expense</NavLink>
                <NavLink activeClassName="active" to="/help">Help</NavLink>
            </nav>
        </div>
    )
}

export default Header;
