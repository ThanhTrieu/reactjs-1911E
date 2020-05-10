import React from 'react';

class Panigation extends React.Component {
  componentWillUnmount(){
    console.log('component Panigation vua bi xoa');
  }
  render() {
    return (
      <>
        <h3>This is Panigation</h3>
      </>
    )
  }
}

export default class Lifecycle extends React.Component {
  // lifecycle - mounting
  constructor(props) {
    super(props);
    // khai bao state
    this.state = {
      count: 0,
      show: true
    }
    // khai bao Refs
    // Refs provide a way to access DOM nodes or React elements created in the render method.
    this.infoTagP = React.createRef();

    console.log('constructor of mounting');
  }

  static getDerivedStateFromProps(props, state) {
    // muon cap nhat lai state theo props
    // xu ly logic state theo props va return state dc cap nhat ve
    console.log('getDerivedStateFromProps of mounting');
    console.log('getDerivedStateFromProps of updating');
    return null; // khong cap nhat gi het
  }

  componentDidMount() {
    console.log('mounting done');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // neu tra ve false ko render lai giao dien va nguoc lai
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // truoc khi update DOM hay Refs can lam gi do
    console.log('getSnapshotBeforeUpdate of updating');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate of updating');
  }

  changeCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  hidePanigation = () => {
    // tuyet doi ko : this.state.show 
    this.setState({
      ...this.state,
      show: false
    })
  }

  showRefElement = () => {
    console.log(this.infoTagP.current);
  }

  render() {
    console.log('render of mounting');
    console.log('render of updating');
    return (
      <>
        <h1>Hello Reactjs - {this.state.count}</h1>
        {this.state.show ? (<Panigation/>) : null}

        <p
          name="test"
          className="test"
          id="test"
          ref={this.infoTagP}
        >This is test Refs</p>

        <button
          onClick={() => this.showRefElement()}
        > get Refs P</button>

        <button
          onClick={() => this.hidePanigation()}
        > Xoa Panigation</button>
        <button
          onClick={() => this.changeCount()}
        > change</button>
      </>
    )
  }
}