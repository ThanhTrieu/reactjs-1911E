import React from 'react';
import PropTypes from 'prop-types';
import { Panigation } from './Panigation';

export default class Home extends React.PureComponent {
  render(){
    console.log('component Home vua dc render lai');
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
Home.propTypes = {
  name: PropTypes.string
}