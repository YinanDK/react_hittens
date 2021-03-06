// this component handles  the App template used for every page.

import React, {PropTypes} from 'react';
import Header from './common/header';
import {connect} from 'react-redux';


class App extends React.Component{
  render(){
    return(
      <div className = "container-fluid content-container">
        <Header />

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired

};


export default App;
