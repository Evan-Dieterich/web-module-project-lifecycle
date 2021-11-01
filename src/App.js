import React from 'react';
import axios from 'axios'
import user from './components/User';

const fetchUser = (user, followers) => {
  return axios.get(`https://api.github.com/users/${user}${followers}`)
      .then(res => res)
      .catch(err => err)
}

class App extends React.Component {
  state = {
    userData : {},
    user : 'Evan-Dieterich',
    followers : []
  };

  componentDidMount() {
    fetchUser(this.state.user, '')
      .then(res => {
        this.setState({
          ...this.state,
          userData : res.data
        })
        console.log(res.data)
      })
     .catch()
  }

  render() {
    return(<div>
      <User></User>
    </div>);
  }
}

export default App;
