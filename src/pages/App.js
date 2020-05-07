import React, {Component} from 'react';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import Home from '../components/Home/Home';

// class component
class App extends Component {
  constructor(props){
    super(props);
    // khai bao state
    this.state = {
      count : 0
    }
  }
  
  // viet ham bat su kien bam vao button
  clickButton = () => {
    //alert('click me');
    // cap nhat lai state
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <>
        {/* warper component */}
        {/* props : title */}
        <Header title="Hello you" />
        <h1>Hello reactjs - {this.state.count}</h1>
        <button onClick={() => this.clickButton()}>thay doi state</button>
        <Home 
          count={this.state.count} 
          name="This is product - home page" 
        />
        {/* props children */}
        <Footer name="react js">This is footer</Footer>
      </>
    )
  }
}
export default App;