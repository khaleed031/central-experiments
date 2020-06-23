import React from 'react'
import {Link} from 'react-router-dom'

class LeftSideMenus extends React.Component 
{
    render(){

        return <div>
            <div>
            <Link to="/Home">Home</Link>
            </div>       
            <div>
            <Link to="/tasklistview">Task List View</Link>
            </div>
            <div>
            <Link to="/taskgridview">Tasks</Link>
            </div>     
     
        </div>;
    }
}

export default LeftSideMenus;