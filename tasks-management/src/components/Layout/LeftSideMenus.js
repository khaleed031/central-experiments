import React from 'react'
import {Link} from 'react-router-dom'

class LeftSideMenus extends React.Component 
{
    render(){

        return <div>
            <div>
            <Link to="/Home">Home</Link>
            </div>            
            <Link to="/taskgridview">Tasks</Link>

        </div>;
    }
}

export default LeftSideMenus;