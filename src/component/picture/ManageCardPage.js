import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';


import {browserHistory} from 'react-router';
import CardListElement from "./CardListElement";

class ManageCardPage extends React.Component {

  //initialize state and call our bind functions
  constructor(props, context){
    super(props, context);
    this.state = {
      card : Object.assign({}, this.props.card)
    };

  }


  render(){

    return(

      <div>
        <h1>Home page</h1>
        <CardFrom
          allAuthors = {this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course = {this.state.course}
          errors = {this.state.errors}
          loading = {this.state.saving}
        />

      </div>
    );
  }
}

ManageCardPage.propTypes = {
  card : PropTypes.object.isRequired,
  action: PropTypes.object
};


export default ManageCardPage;
