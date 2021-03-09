import React, { Component } from 'react'
import auth from '../utils/auth';
import {withRouter} from 'react-router-dom';


class LoginSuccess extends Component {

    componentDidMount(){

        console.log(localStorage.getItem('users'))

        let myHeaders = '';

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch("https://api.pins.co.id/api/user/profile/get", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render(){
        return(
            <div>
                <h1 className="text-3xl font-bold"> Login Success</h1>
                <button onClick={() => auth.logout(() => {
                    this.props.history.push('/');
                })}>Logout</button>
            </div>
        )
    }
}

export default withRouter(LoginSuccess);