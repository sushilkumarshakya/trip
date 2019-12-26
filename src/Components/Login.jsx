import React, { Component } from 'react'
import axios from 'axios'
import "./Login.css"
import { userService } from '../Services/Userservices';

export default class Login extends Component {

  constructor(props) {
    super(props);   
    userService.logout();
    this.state = {
        username: '',
        password: '',
        submitted: false,        
        error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();
        this.setState({ submitted: true });
        const { username, password} = this.state;        
        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        axios.get(`https://swapi.co/api/people/1/`)
          .then(res => {    
            
            console.log( localStorage.getItem('username'));
            console.log( localStorage.getItem('password'));

            const {name,birth_year} = res.data;
            if(name === username && password === birth_year){
              localStorage.setItem('username',name);
              localStorage.setItem('password',birth_year);
              this.props.history.push("/search");
            }else{
              this.setState({ error: true });
            }           
            
          })        
      
}  
  
  render() {
    const { username, password, submitted,error } = this.state;
    return (
      <div>
        <div className="wrapper fadeInDown">
          <h1>How Can I Help You find Planets?</h1>
          
          <hr/>
          <div id="formContent">
            <div className="fadeIn first">
              <h3>User Login</h3>
            </div> 
            {error && 
              <p className="text-danger">Please Enter Valid Details</p>                            
            }   
            {submitted && !username &&
              <p className="text-danger">Username is required</p>                            
            }
            {submitted && !password &&
              <p className="text-danger">Password is required</p>                            
            }                        
            <form onSubmit={this.handleSubmit}>
              <input type="text" id="login" className="fadeIn second" name="username" placeholder="Name" value={username} onChange={this.handleChange}/>
              <input type="text" id="password" className="fadeIn third" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
              <input type="submit" className="fadeIn fourth" value="Log In"/>
            </form> 
            <p>Test Username: Luke Skywalker</p>               
            <p>Test Password: 19BBY</p>               
          </div>
        </div>
      </div>
    )
  }
}
