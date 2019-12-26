import React, { Component } from 'react'
import axios from 'axios'
import Searchitem from './Searchitem';
import {Link} from 'react-router-dom'
export default class Search extends Component {

    constructor(props) {
        super(props);       
        this.state = {
            search:'',
            results: [],            
            error: false
        };
        this.handleSearch = this.handleSearch.bind(this);  
        if(!localStorage.getItem('username') && !localStorage.getItem('password')){
            this.props.history.push("/");
        }     
    }

    handleSearch(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });  
        
        axios.get(`https://swapi.co/api/planets/`)
          .then(res => { 
          if(this.state.search.length !== 0){
            this.setState({results:res.data.results.filter((item)=>{
                return item.name.toLowerCase().indexOf(this.state.search) !== -1;
              })});    
          }else{
            this.setState({results:[]});
          }  
              
              console.log(res.data.results);          
        })  
    } 

    render() {
        const { search } = this.state;
        return (
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li>    
                </ul>
            </nav>
            <div className="container">
                <div className="form-group">
                    <label>Search Planets:</label>
                    <input type="text" name="search" className="form-control" placeholder="Alderaan" value={search} onChange={this.handleSearch}/>
                </div> 

                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Diameter</th>
                        <th>Rotation Period</th>
                        <th>Orbital Period</th>                        
                    </tr>
                    </thead>
                    <tbody>
                        <Searchitem planets={this.state.results}/>                                                                                  
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
