import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
class HomeGuest extends Component {
  
constructor(props){
  super(props)
  this.state={
    username:'',
    email:'',
    password:''
  }
  this.changeemail=this.changeemail.bind(this);
    this.changeusername=this.changeusername.bind(this);
    this.changepassword=this.changepassword.bind(this);
    this.saveUser=this.saveUser.bind(this);
}
changeemail=(event)=>{
  this.setState({email:event.target.value});
}
changeusername=(event)=>{
this.setState({username:event.target.value});
}
changepassword=(event)=>{
this.setState({password:event.target.value});
}

saveUser=(e)=>{
  
  e.preventDefault();
  let user={username:this.state.username,password:this.state.password,email:this.state.email}
  console.log('user=>'+JSON.stringify(user));
 
  fetch('http://localhost:8080/api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res=>{
  // alert("done");
      this.props.history.push("/test");
    //  this.props.router.push("/welcome")
    }).catch(err => console.log(err));
  
  
}

render(){
 
 
    return(
      
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          <p className="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" value={this.state.username} onChange={this.changeusername} type="text" placeholder="Pick a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" value={this.state.email} onChange={this.changeemail} className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" value={this.state.password} onChange={this.changepassword} type="password" placeholder="Create a password" />
            </div>
            <button  type="submit" onClick={this.saveUser} className="py-3 mt-4 btn btn-lg btn-success btn-block">
           
            Sign up for ComplexApp
         
            </button>
          </form>
        </div>
      </div>
     

    )
}
}
export default HomeGuest;