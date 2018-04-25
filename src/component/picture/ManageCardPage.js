import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import TitleForm from './TttleForm';
import * as CardsActions from "../../actions/CardsActions";
import toastr from 'toastr';

class ManageCardPage extends React.Component {

  //initialize state and call our bind functions
  constructor(props, context){
    super(props, context);
    this.state = {
      card : Object.assign({}, this.props.card),
      errors: {}
    };
    this.updateCardState = this.updateCardState.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }

  updateCardState(event){
    const field =  event.target.name;
    let card  = this.state.card;
    card[field]= event.target.value;
    return this.setState({card:card});
  }

  saveCard(event){
    event.preventDefault();

    this.props.action.saveCard(this.props.card)
      .then(()=>this.redirect())
      .catch(error=>{
        toastr.error(error);
      });

  }

  redirect (){
    this.context.router.push('/');
    toastr.success('Card Saved');
  }

  render(){

    return(

      <div>
        <TitleForm
          className="form-control-feedback"
        onChange={this.updateCardState}
        onSave={this.saveCard}
        card = {this.state.card}
        errors = {this.state.errors}
        />
      </div>
    );
  }
}

ManageCardPage.propTypes = {
  card : PropTypes.object,
  action: PropTypes.object
};

ManageCardPage.contextTypes = {
  router: PropTypes.object
};


function getCardById(cards, id){
  const card = cards.filter(card => card.id == id);
  if(card )return card [0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const cardId = ownProps.params.id;


  let card ={
    id: "",
    title : "",
    description:""
  };

  if(cardId) {
    card = getCardById(state.cards, cardId);
  }

  return {
    card: card

  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(CardsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCardPage);
