import React, { Component } from 'react';
import axios from '../axios';

class User extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    var self = this;
    axios.get('/users.json')
      .then(res => {
        //const users = res.data;
       self.setState({ users: Object.values(res.data) });
        console.log(self.state.users);
      })
  }

  render() {
    return (
     <tbody>
      { this.state.users.map((user) => <tr key={user.email}><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td> </tr>)}
      </tbody>
    )
  }
}

export default User;