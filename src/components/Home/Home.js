import React from 'react';
import { Panigation } from './Panigation';

export default class Home extends React.Component {
  render(){
    return(
      <>
        <h2>This is home page - {this.props.name}</h2>
        <Panigation name={this.props.name} />
      </>
    );
  }
}
Home.defaultProps = {
  name: "default value"
}