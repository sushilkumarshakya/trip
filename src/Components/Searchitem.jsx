import React, { Component } from 'react'

export default class Searchitem extends Component {    
  render() {
    return (
      <React.Fragment>
        {this.props.planets.map((planet)=>(
            <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.population}</td>
                <td>{planet.diameter}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
            </tr>
        ))} 
      </React.Fragment>
    )
  }
}
