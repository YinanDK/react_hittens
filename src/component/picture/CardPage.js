import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';

import  CardsList from './CardsList';
import Weather from "./Weather";



class CardPage extends React.Component {

  //initialize state and call our bind functions
  constructor(props, context){
    super(props, context);

  }

  render(){
    debugger;
    return(

      <div>
        <div className="Weather">
          < Weather weather={this.props.weather} />
        </div>

        <h1>Library</h1>
        < CardsList cards ={this.props.cards} />



      </div>
    );
  }
}

CardPage.propTypes = {

  cards: PropTypes.array,
  action: PropTypes.object,
  weather: PropTypes.array
};



function mapStateToProps(state, ownProps){

debugger;
  return{
    cards: state.cards,
    weather: state.weather
  };
}



export default  connect(mapStateToProps)(CardPage);
