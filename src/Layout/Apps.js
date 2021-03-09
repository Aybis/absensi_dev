import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Header from '../Components/Apps/Header';
import Sidebar from '../Components/Apps/Sidebar';
import SidebarMobile from '../Components/Apps/SidebarMobile';
import Dashboard from '../Page/Apps/Dashboard';
import ListModules from '../Page/Apps/ListModules';
import User from '../Page/Apps/User';

import './styles.css';

class Apps extends Component {
    
    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDropdown : false,
            nodeRef: React.createRef(),
        }
    }

    openSidebar = () => {
        let isOpen = this.state.isOpen;
        this.setState({
            isOpen : !isOpen,
        })
    }

    openDropdownUser = () => {
        let isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown : !isDropdown,
        })
    }

    componentDidMount() {
        // let location = this.props.location;
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <BrowserRouter>
            <div className="flex flex-row">
                <Sidebar isOpen={this.state.isOpen} openSidebar={this.openSidebar} />
                <SidebarMobile />
                
                <main className="flex-grow flex-auto bg-gray-50 overflow-auto min-h-screen">
               
                    <Header nodeRef={this.state.nodeRef} title='Test' isDropdown={this.state.isDropdown} openDropdownUser={this.openDropdownUser} />
                         
                    {/* Content  */}
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/apps" component={ListModules} />
                        <Route path="/me" exact component={User} />
                    </Switch>
                    {/* End Content  */}
                    
                </main>
            </div>
            </BrowserRouter>

        )
    }
}

export default withRouter(Apps);