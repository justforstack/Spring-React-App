import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
const axios = require('axios');

  class Header extends Component{
    constructor(props){
      super(props)
  
      this.state ={
        username:'',
        password:''
      }
      this.changeUsername =this.changeUsername.bind(this)
      this.changePassword =this.changePassword.bind(this)
      this.saveUserDetails=this.saveUserDetails.bind(this)
      this.redirect=this.redirect.bind(this)
    }
    changeUsername=(event)=>{
      this.setState({username: event.target.value});
    }
    changePassword=(event)=>{
      this.setState({password: event.target.value});
    }
    redirect=(e)=>{
      e.preventDefault();
      this.props.history.push("/welcome");
       
    }
    saveUserDetails=(e)=>{
     e.preventDefault()
     let user={username:this.state.username,password:this.state.password}
     console.log('user=>'+JSON.stringify(user))
     
      axios.post({
        method: 'POST',
        url:"http://localhost:8080/api/v1/users", 
        data: JSON.stringify(user), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
      })
      .then(response=>{
      console.log(response)
      })
      .catch(error=>{
      alert(error)
      })
  
    }
  render(){
 
return(
    <>
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        <button onClick={()=>{this.props.history.push("/welcome");
        }}>check redirect</button>
        <form>
  <label>
    User Name:
    <input type="text" name="username" value={this.state.username} onChange={this.changeUsername}/>
  </label>
  <label>
    Password:
    <input type="text" name="password" value={this.state.password} onChange={this.changePassword}/>

  </label>
  <input type="submit" value="Submit" onClick={this.redirect}/>
</form>
      </div>
     
    </header>
   
    </>
)
  }
}
export default withRouter (Header)