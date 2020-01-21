import React from 'react';



class User extends React.Component {

  render() {
    console.log(this.props.name);
    return (
      <h1>User1</h1>
    )
  }
}

export default User;