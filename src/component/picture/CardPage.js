import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';


import {browserHistory} from 'react-router';
import * as CardsActions from '../../actions/CardsActions';

import  CardsList from './CardsList';


class CardPage extends React.Component {

  //initialize state and call our bind functions
  constructor(props, context){
    super(props, context);

  }




  render(){
    const {cards} = this.props;
    return(

      <div>
        <h1>Library</h1>
        < CardsList cards ={cards} />

      </div>
    );
  }
}

CardPage.propTypes = {

  cards: PropTypes.array,
  action: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return{
    cards: state.cards
  };
}
function mapDispatchToProps(dispatch){
  return{
    action: bindActionCreators(CardsActions, dispatch)
  };
}


export default  connect(mapStateToProps, mapDispatchToProps)(CardPage);
