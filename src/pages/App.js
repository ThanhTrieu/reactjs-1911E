import React, {Component} from 'react';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import Home from '../components/Home/Home';

// class component
class App extends Component {

  render() {
    return(
      <>
        {/* warper component */}
        {/* props : title */}
        <Header title="Hello you" />
        <h1>Hello reactjs</h1>
        <Home name="This is product - home page" />
        {/* props children */}
        <Footer name="react js">This is footer</Footer>
      </>
    )
  }
}
export default App;