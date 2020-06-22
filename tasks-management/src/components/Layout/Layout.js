import React from 'react'
import GlobalBar from '../../components/Layout/GlobalBar'
import LeftSideMenus from '../../components/Layout/LeftSideMenus'
import Channels from '../../components/Layout/Channels'
import RecentlyViewed from '../../components/NodeParts/RecentlyViewed'
import { Container } from "react-bootstrap";
import './Layout.css'

class Layout extends React.Component {
    //static contextType = AppContext
    // componentDidMount() {
    //     const { loggedInContact } = this.context;
    // }

    toggleAreaListingHandeler = (event) => {
        event.preventDefault();
        this.setState(prevState=>{
            return {isAreaPanelShown: !prevState.isAreaPanelShown}
        });
    }

    render(){
        let showAllContents = !this.props.showPageContentOnly && this.props.loggedInContact && this.props.loggedInContact.email;
        let content = (
            <Container id={showAllContents ? "CentralAppContainer" : ""}>
                {this.props.children}
            </Container>
        );
        
        if(showAllContents){
            content = (
                <div id="centralLayout">
                    <GlobalBar loggedInContact={this.props.loggedInContact} toggleAreaListing={this.toggleAreaListingHandeler}/>
                    <div id="leftSidePanel">
                        <LeftSideMenus />
                        <RecentlyViewed />
                        <Channels />
                    </div>
                    {content}
                </div>                
            );
        }
        return content;
    }
}

export default Layout;