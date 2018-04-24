

import CardApi from '../api/mockCardsApi';




export function loadCardsSucess(cards){
  return {type: 'LOAD_CARDS_SUCCESS', cards};
}


export function displayCardSucess(cards){
  return {type: 'DISPLAY_CARD_SUCCESS', cards};
}

export function loadCards(){
  return function(dispatch) {

    return CardApi.getAllCards().then(cards =>{
      dispatch(loadCardsSucess(cards));
    }).catch(error =>{
      throw(error);
    });
  };
}

export function displayCard(){
  return function(dispatch) {

    return CardApi.getCardByID(card).then(displayedCard =>{
      if(card.id){
        dispatch(displayCardSucess(displayedCard));
      }
    }).catch(error =>{
      throw(error);
    });
  };
}
