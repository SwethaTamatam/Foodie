import React, { Component } from 'react'

export class UserClass extends Component {
    constructor(props){
        super(props)

        this.state = {
         userInfo:{
          name : "Swetha",
          location: "Default"
         }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/SwethaTamatam")
        const json = await data.json()
        this.setState({
          userInfo: json
        })
    }
  render() {
    const {name, location, contact,avatar_url} = this.state.userInfo;

    return (
      <div className='user-card'>
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: {contact}</h3>
      </div>
    )
  }
}

export default UserClass