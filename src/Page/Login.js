import React, { Component } from 'react';
import { Activity } from 'react-feather';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            isReady : false,
            isProgress: false,
        }
    }

    requestTokenUser(request){
        fetch("https://api.pins.co.id/api/auth/token/request", request)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('user', result.data.access_token)
        }).catch(error => console.log('error', error));
    }

    getProfileUser(request){
        fetch("https://api.pins.co.id/api/user/profile/get", request)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
     
    handlerSubmit= e => {
        e.preventDefault();
        localStorage.removeItem('user');
        let formdata = new FormData();
        formdata.append("username", this.username);
        formdata.append("password", this.password);

        let requestToken = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        this.requestTokenUser(requestToken);

        let header = new Headers();
        header.append("Authorization", `Bearer ${localStorage.getItem('user')}`)
        
        let requestProfile = {
            method: 'GET',
            headers: header,
            redirect: 'follow'
        }

        this.getProfileUser(requestProfile);
          
    }
            


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isReady: true,
            })
        }, 300);
    }

    render() {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className={`${!this.state.isReady ? 'opacity-0':'opacity-100'} grid px-4 ease-in-out duration-500`}>
    
                    {/* Background */}
                    <div className=" col-start-1 col-end-3 lg:col-start-1 lg:col-end-5 row-start-2 row-end-4 lg:row-end-5 lg:py-10 xl:py-16 flex -mr-8 pl-4 sm:mr-0 sm:pl-0">
                        <div className="bg-gray-200 w-full flex-none rounded-3xl"></div>
                        <div className="w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-lime-300 to-emerald-500 -rotate-1 sm:-rotate-2" style={{ marginLeft: '-100%' }}></div>
                    </div>
                    {/* Card SVG */}
                    <div className="relative rounded-lg z-10 col-start-1 col-end-4 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center pl-8 sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0 bg-green-500 lg:-mr-4 lg:ml-8">
                        <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>
    
                        <div className="relative z-10 rounded-tl-xl sm:rounded-t-xl lg:rounded-xl shadow-lg">
                            <div className="rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                                <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5 w-full">
                                    <div className="min-w-0 flex-auto space-y-2">
                                        <div className="space-x-2 flex items-center">
                                            <Activity height={50} width={40} className="h-30 w-50 inline-block text-lime-400" /> 
                                            <h2 className="inline-block text-lime-400  text-2xl font-semibold">
                                                Tailwind React
                                            </h2>
                                        </div>
                                       
                                        <p className="ml-12 text-gray-500  text-base font-light max-w-lg text-left">
                                            Esse dolor id laboris consequat dolor fugiat proident consequat eiusmod esse sunt.
                                            Proident adipisicing nulla dolor tempor cupidatat ullamco eiusmod sunt aute aliquip commodo ad cillum ipsum.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`${!this.state.isProgress ? 'w-0' : 'w-full'} bg-lime-500  h-1.5 rounded-full ease-in-out duration-700`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card Login */}
                    <div className="relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 lg:row-start-2 lg:row-end-5 self-center pb-8 lg:pb-0 lg:mr-8">
                        <div className="relative overflow-hidden md:rounded-xl shadow-2xl flex bg-white">
                            {/* <div className="absolute inset-0 bg-black bg-opacity-75"></div> */}
                            <div className="relative w-full flex flex-col">
                                <div className="flex-none h-11  items-center px-4 hidden">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                                        <div className="w-3 h-3 border-2 rounded-full border-amber-400"></div>
                                        <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                                    </div>
                                </div>
                                <div className="relative border-t border-gray-400 border-opacity-10 min-h-0 flex-auto flex flex-col">
                                    <div className="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"></div>
                                    <div className="w-full flex-auto flex min-h-0 overflow-auto">
                                        <div className="w-full relative flex-auto">
                                            <div className="flex flex-col p-8 gap-12">
                                              
                                                <div className="flex flex-col gap-4">
                                                    <h1 className="text-3xl font-bold text-gray-800">Login</h1>
                                                    <h1 className="text-sm font-medium text-gray-400">Login with your data that you entered during your registration</h1>
                                                </div>
    
                                                <form onSubmit={this.handlerSubmit} className="flex flex-col gap-8">
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="username" className="font-semibold text-gray-400">Your Username</label>
                                                        <input type="text"  onChange={event => this.username = event.target.value} className="p-4 border border-gray-200 rounded-lg w-full focus:border-4 focus:border-green-400" placeholder="fauzi.hanif" />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="password" className="font-semibold text-gray-400">Password</label>
                                                        <input type="password"  onChange={event => this.password = event.target.value} className="p-4 border border-gray-200 rounded-lg w-full" />
                                                    </div>
    
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" />
                                                        <label htmlFor="checkbox" className="font-semibold text-gray-400 text-xs" >Keep me logged in</label>
                                                    </div>
    
                                                    <button className="inline-block bg-green-400 w-full rounded-lg p-4 text-white font-bold mt-4 hover:bg-green-600 duration-500 text-lg">
                                                        Login
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* End Card */}
                </div>
            </div>
        );
    }

}

  


export default Login;