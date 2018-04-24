

import CardApi from '../api/mockCardsApi';




export function loadCardsSucess(cards){
  return {type: 'LOAD_CARDS_SUCCESS', cards};
}


export function updateCardSucess(card){
  return {type: 'UPDATE_CARD_SUCCESS', card};
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

export function saveCard(card){
  return function(dispatch) {

    return CardApi.saveCard(card).then(savedCard =>{
      if(card.id){
        dispatch(updateCardSucess(savedCard));
      }
    }).catch(error =>{
      throw(error);
    });
  };
}
