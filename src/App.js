import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import New from "./components/New/New";
import Top3 from "./components/Top3/Top3";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibility: false
    }
    this.openMobileMenu = this.openMobileMenu.bind(this);
  }

  openMobileMenu() {
    const toggleVisibility = !this.state.menuVisibility;
    this.setState({
      menuVisibility: toggleVisibility
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.menuVisibility && <div className='background-opacity' />}
        <Header 
          openMobileMenu={this.openMobileMenu} 
          menuVisibility={this.state.menuVisibility}
        />
        <main className="main">
          <Feature />
          <New />
          <Top3 />
        </main>
      </div>
    )
  }
}
