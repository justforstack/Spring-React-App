import React, { Component } from 'react';
import UserService from '../services/UserService';

class test extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        UserService.getUsers().then((res)=>{
           this.setState({users:res.data});
        }
        );
}
    render() {
        return (
            <div>
                <h>this is the get request call testing page</h>
                <table className="table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th>User Name</th>
                               <th>Password</th>
                               <th>User Email Id</th>
                           </tr>
                       </thead>
                       {
                           this.state.users.map(
                               user=>
                                   <tr key={user.id}>
                                       <td>{user.username}</td>
                                       <td>{user.password}</td>
                                       <td>{user.email}</td>
                                      
                                   </tr>
                               
                           )
                       }
                    </table>
            </div>
        );
    }
}

export default test;