import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as WeatherAction from "../../actions/WeatherAction";


class Weather extends React.Component {

  //initialize state and call our bind functions
  constructor(props, context){
    super(props, context);

  }


  render(){
    return(
        <div>
          {this.props.weather.app_temp}
        </div>
    );
  }
}

Weather.propTypes = {

  weather: PropTypes.object,
  action: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return{
    weather: state.weather
  };
}
function mapDispatchToProps(dispatch){
  return{
    action: bindActionCreators(WeatherAction, dispatch)
  };
}


export default  connect(mapStateToProps, mapDispatchToProps)(Weather);



